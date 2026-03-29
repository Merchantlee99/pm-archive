import { ArchiveRow } from './ArchiveRow'

export function WritingFeedView({ view, onSelectArticle }) {
  return (
    <section className="archive-view archive-view--writing" id="writing">
      <div className="archive-view__intro">
        <p className="archive-note">{view.kicker}</p>
        <h1>{view.title}</h1>
        <p className="archive-view__summary">{view.summary}</p>
      </div>

      <div className="archive-view__list">
        {view.items.map((item) => (
          <ArchiveRow
            key={item.slug ?? item.title}
            item={item}
            variant="writing"
            onSelect={onSelectArticle}
          />
        ))}
      </div>
    </section>
  )
}
