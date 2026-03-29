#!/usr/bin/env python3
from __future__ import annotations

from pathlib import Path

from common import emit_json, git_changed_paths, has_project_local_git, load_event, load_runtime, resolve_repo_root


META_PATHS = {
    "Documentation.md",
    "Implement.md",
    ".vibebuilder/runtime.json",
}

SKIP_DIRS = {"node_modules", "dist", ".git", ".codex"}


def latest_write_mtime(repo_root: Path, write_paths: list[str]) -> float:
    latest = 0.0
    for rel in write_paths:
        path = (repo_root / rel).resolve()
        if not path.exists():
            continue
        if path.is_file():
            latest = max(latest, path.stat().st_mtime)
            continue
        for child in path.rglob("*"):
            if any(part in SKIP_DIRS for part in child.parts):
                continue
            if child.is_file():
                latest = max(latest, child.stat().st_mtime)
    return latest


def main() -> None:
    event = load_event()
    if event.get("stop_hook_active"):
        emit_json({"continue": True})
        return

    repo_root = resolve_repo_root(event.get("cwd"))
    runtime, _ = load_runtime(repo_root)

    if not runtime or runtime.get("_invalid"):
        emit_json({"continue": True})
        return

    mode = runtime.get("mode", "solo-pro")
    if mode == "solo-lite":
        emit_json({"continue": True})
        return

    doc_path = repo_root / "Documentation.md"
    if not doc_path.exists():
        emit_json(
            {
                "decision": "block",
                "reason": "Documentation.md가 없습니다. 현재 상태와 다음 재개 지점을 먼저 남기세요.",
            }
        )
        return

    changed_paths = git_changed_paths(repo_root)
    meaningful_changes = [
        path for path in changed_paths if path not in META_PATHS and not path.startswith(".codex/")
    ]

    if meaningful_changes and "Documentation.md" not in changed_paths:
        emit_json(
            {
                "decision": "block",
                "reason": (
                    "Documentation.md를 갱신하세요. 이번 턴에 작업 결과가 바뀌었지만 "
                    "현재 상태와 다음 재개 지점이 아직 문서에 남지 않았습니다."
                ),
            }
        )
        return

    if not has_project_local_git(repo_root):
        latest_mtime = latest_write_mtime(repo_root, runtime.get("execution", {}).get("write_paths", []))
        if latest_mtime and latest_mtime > doc_path.stat().st_mtime + 1:
            emit_json(
                {
                    "decision": "block",
                    "reason": (
                        "project-local git이 없어 mtime fallback으로 판정했습니다. "
                        "이번 변경보다 Documentation.md가 더 오래되었습니다. 현재 상태와 다음 재개 지점을 먼저 남기세요."
                    ),
                }
            )
            return

    emit_json({"continue": True})


if __name__ == "__main__":
    main()
