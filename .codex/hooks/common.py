#!/usr/bin/env python3
from __future__ import annotations

import json
import subprocess
import sys
from pathlib import Path


PROJECT_DOCS = (
    "Prompt.md",
    "PRD.md",
    "Plan.md",
    "Implement.md",
    "Documentation.md",
    "Subagent-Manifest.md",
)


def load_event() -> dict:
    raw = sys.stdin.read().strip()
    if not raw:
        return {}
    try:
        return json.loads(raw)
    except json.JSONDecodeError:
        return {}


def _find_project_root(start: Path) -> Path | None:
    current = start.resolve()
    for candidate in (current, *current.parents):
        if (candidate / ".vibebuilder" / "runtime.json").exists() or (candidate / "AGENTS.md").exists():
            return candidate
    return None


def resolve_repo_root(cwd: str | None) -> Path:
    if cwd:
        project_root = _find_project_root(Path(cwd))
        if project_root is not None:
            return project_root
        start = Path(cwd)
    else:
        start = Path.cwd()
        project_root = _find_project_root(start)
        if project_root is not None:
            return project_root

    try:
        result = subprocess.run(
            ["git", "-C", str(start), "rev-parse", "--show-toplevel"],
            capture_output=True,
            text=True,
            check=True,
        )
        return Path(result.stdout.strip())
    except Exception:
        return start.resolve()


def runtime_path(repo_root: Path) -> Path:
    return repo_root / ".vibebuilder" / "runtime.json"


def load_runtime(repo_root: Path) -> tuple[dict | None, Path]:
    path = runtime_path(repo_root)
    if not path.exists():
        return None, path
    try:
        return json.loads(path.read_text(encoding="utf-8")), path
    except json.JSONDecodeError:
        return {"_invalid": True}, path


def existing_project_docs(repo_root: Path) -> list[str]:
    return [name for name in PROJECT_DOCS if (repo_root / name).exists()]


def expected_docs_for_mode(mode: str) -> list[str]:
    if mode == "solo-lite":
        return ["Implement.md", "Documentation.md"]
    if mode == "team":
        return [
            "Prompt.md",
            "PRD.md",
            "Plan.md",
            "Implement.md",
            "Documentation.md",
        ]
    return ["Prompt.md", "PRD.md", "Plan.md", "Implement.md", "Documentation.md"]


def has_project_local_git(repo_root: Path) -> bool:
    return (repo_root / ".git").exists()


def git_changed_paths(repo_root: Path) -> list[str]:
    if not has_project_local_git(repo_root):
        return []
    try:
        result = subprocess.run(
            ["git", "-C", str(repo_root), "status", "--porcelain"],
            capture_output=True,
            text=True,
            check=True,
        )
    except Exception:
        return []

    paths: list[str] = []
    for line in result.stdout.splitlines():
        if len(line) < 4:
            continue
        path = line[3:]
        if " -> " in path:
            path = path.split(" -> ", 1)[1]
        paths.append(path)
    return paths


def emit_json(payload: dict) -> None:
    sys.stdout.write(json.dumps(payload, ensure_ascii=False))
