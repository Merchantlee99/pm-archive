export function ArchiveLeadItem({ item, variant = 'writing' }) {
  return (
    <article className={`archive-lead-item archive-lead-item--${variant}`}>
      <div className="archive-lead-item__meta">
        <span>{item.date}</span>
        <span>{item.category}</span>
        {item.status ? <span>{item.status}</span> : null}
      </div>

      <div className="archive-lead-item__body">
        {item.eyebrow ? <p className="archive-note">{item.eyebrow}</p> : null}
        <h2 className="archive-lead-item__title">
          <a href={item.href}>{item.title}</a>
        </h2>
        <p>{item.excerpt}</p>
        {item.highlight ? <p className="archive-lead-item__highlight">{item.highlight}</p> : null}
        {item.linkLabel ? (
          <a className="archive-inline-link" href={item.href}>
            {item.linkLabel}
          </a>
        ) : null}
      </div>

      <div className="archive-lead-item__tags">
        {item.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </article>
  )
}
