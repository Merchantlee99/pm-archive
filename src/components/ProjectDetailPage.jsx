export function ProjectDetailPage({ project }) {
  return (
    <section className="archive-project-page">
      <a className="archive-back-link" href="#/">
        글 아카이브로 돌아가기
      </a>

      <div className="archive-project-page__head">
        <div className="archive-project-page__eyebrow">
          <p className="archive-note">{project.kicker}</p>
          <p className="archive-project-page__meta">{project.meta}</p>
        </div>
        <h1>{project.title}</h1>
        <p className="archive-project-page__summary">{project.summary}</p>
      </div>

      <div className="archive-project-page__facts">
        {project.facts.map((fact) => (
          <section key={fact.label} className="archive-project-page__fact">
            <p>{fact.label}</p>
            <strong>{fact.value}</strong>
          </section>
        ))}
      </div>

      <div className="archive-project-page__stage">
        <section className="archive-project-page__panel archive-project-page__panel--overview">
          <p className="archive-note">Project snapshot</p>
          <div className="archive-project-page__inline-meta">
            <span>{project.status}</span>
            <span>{project.timeline}</span>
            <span>{project.scope}</span>
          </div>
          <ul className="archive-project-page__highlights">
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </section>

        <aside className="archive-project-page__panel archive-project-page__panel--insight">
          <p className="archive-note">Why this case matters</p>
          <p>{project.closing}</p>
        </aside>
      </div>

      <div className="archive-project-page__sections">
        {project.sections.map((section) => (
          <section key={section.title} className="archive-project-page__section">
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </section>
        ))}
      </div>

      <footer className="archive-project-page__footer">
        <a className="archive-back-link" href="#/">
          홈으로 돌아가기
        </a>
      </footer>
    </section>
  )
}
