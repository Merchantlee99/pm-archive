export function NotFoundView({ onBack }) {
  return (
    <section className="archive-not-found" aria-live="polite">
      <p className="archive-note">Not found</p>
      <h1>요청한 글을 찾을 수 없습니다</h1>
      <p>
        링크가 잘못되었거나, 더 이상 사용하지 않는 글 주소일 수 있습니다. 글 아카이브로 돌아가
        현재 정리된 글 목록을 확인해 주세요.
      </p>
      <button type="button" className="archive-topic-chip archive-not-found__action" onClick={onBack}>
        <span className="archive-topic-chip__text">글 아카이브로 돌아가기</span>
      </button>
    </section>
  )
}
