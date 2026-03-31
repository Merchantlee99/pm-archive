function getLeadText(item) {
  if (item.content) {
    const firstParagraph = item.content
      .split(/\n\s*\n/)
      .map((block) => block.trim().replace(/\s+/g, ' '))
      .find(Boolean)

    if (firstParagraph) return firstParagraph
  }

  return item.excerpt
}

function resolvePublicAsset(path) {
  const base = import.meta.env.BASE_URL || '/'
  return `${base}${path}`.replace(/([^:]\/)\/+/g, '$1')
}

export function ArchiveRow({ item, variant = 'writing', onSelect }) {
  const BodyTag = item.href ? 'a' : 'div'
  const isWriting = variant === 'writing'
  const quoteText = getLeadText(item)
  const hasReferenceVisual = isWriting && item.referenceVisual?.imagePath
  const visualClassName =
    item.slug === 'system-design-order'
      ? 'archive-row__visual archive-row__visual--contained'
      : 'archive-row__visual'

  return (
    <article className={`archive-row archive-row--${variant}`}>
      <BodyTag
        className={`archive-row__link${item.href ? ' archive-row__link--interactive' : ''}${
          hasReferenceVisual ? ' archive-row__link--with-visual' : ''
        }`}
        href={item.href}
        onClick={
          onSelect && item.slug
            ? (event) => {
                event.preventDefault()
                onSelect(item.slug)
              }
            : undefined
        }
      >
        {isWriting ? (
          <>
            <div className="archive-row__main">
              <h3 className="archive-row__title">{item.title}</h3>
              {item.meta ? (
                <p className="archive-row__meta">
                  <span className="archive-row__meta-date">{item.date}</span>
                  <span>{item.meta}</span>
                </p>
              ) : null}
            </div>

            {hasReferenceVisual ? (
              <div className={visualClassName} aria-hidden="true">
                <img
                  className="archive-row__visual-image"
                  src={resolvePublicAsset(item.referenceVisual.imagePath)}
                  alt=""
                  loading="lazy"
                />
              </div>
            ) : null}

            <div className="archive-row__quote">
              <span className="archive-row__quote-mark" aria-hidden="true">
                “
              </span>
              <p className="archive-row__excerpt">{quoteText}</p>
              {item.highlight ? <p className="archive-row__highlight">{item.highlight}</p> : null}
            </div>
          </>
        ) : (
          <div className="archive-row__body">
            <div className="archive-row__header">
              <h3 className="archive-row__title">{item.title}</h3>
              {item.meta ? <p className="archive-row__meta">{item.meta}</p> : null}
            </div>
            <p>{item.excerpt}</p>
            {item.highlight ? <p className="archive-row__highlight">{item.highlight}</p> : null}
          </div>
        )}
      </BodyTag>
    </article>
  )
}
