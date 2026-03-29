import { ArchiveLeadItem } from './ArchiveLeadItem'
import { ArchiveRow } from './ArchiveRow'

export function ProjectFeedView({ view }) {
  return (
    <section className="archive-view archive-view--projects" id="projects">
      <div className="archive-view__intro">
        <p className="archive-note">{view.kicker}</p>
        <h1>{view.title}</h1>
        <p className="archive-view__summary">{view.summary}</p>
      </div>

      <div className="archive-view__list">
        <ArchiveLeadItem item={view.leadItem} variant="project" />
        {view.items.map((item) => (
          <ArchiveRow key={item.title} item={item} variant="project" />
        ))}
      </div>
    </section>
  )
}
