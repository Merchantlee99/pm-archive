export function ArchiveRow({ item, variant = 'writing', onSelect }) {
  function handleClick(event) {
    if (!onSelect || !item.slug) return

    event.preventDefault()
    onSelect(item.slug)
  }

  return (
    <article className={`archive-row archive-row--${variant}`}>
      <div className="archive-row__date">{item.date}</div>

      <div className="archive-row__body">
        <div className="archive-row__header">
          <h3 className="archive-row__title">
            <a href={item.href} onClick={handleClick}>
              {item.title}
            </a>
          </h3>
          {item.meta ? <p className="archive-row__meta">{item.meta}</p> : null}
        </div>
        <p>{item.excerpt}</p>
        {item.highlight ? <p className="archive-row__highlight">{item.highlight}</p> : null}
      </div>
    </article>
  )
}
