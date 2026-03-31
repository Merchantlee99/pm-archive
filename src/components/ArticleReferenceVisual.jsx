function resolvePublicAsset(path) {
  const base = import.meta.env.BASE_URL || "/"
  return `${base}${path}`.replace(/([^:]\/)\/+/g, "$1")
}

export function ArticleReferenceVisual({ visual }) {
  const layout = visual.layout ?? {}
  const figureClassName = [
    "archive-reference-visual",
    layout.mode ? `archive-reference-visual--${layout.mode}` : "",
  ]
    .filter(Boolean)
    .join(" ")

  const figureStyle = {
    ...(layout.imageMaxWidth ? { "--archive-reference-image-max-width": layout.imageMaxWidth } : {}),
    ...(layout.imageHeight ? { "--archive-reference-image-height": layout.imageHeight } : {}),
    ...(layout.objectPosition ? { "--archive-reference-image-position": layout.objectPosition } : {}),
  }

  return (
    <figure className={figureClassName} style={figureStyle}>
      <img
        className="archive-reference-visual__image"
        src={resolvePublicAsset(visual.imagePath)}
        alt={visual.alt}
        loading="lazy"
      />
      <figcaption className="archive-reference-visual__caption">
        <p>{visual.caption}</p>
        <p className="archive-reference-visual__meta">
          <a href={visual.sourceUrl} target="_blank" rel="noreferrer">
            {visual.sourceLabel}
          </a>
          <span>{visual.license}</span>
        </p>
      </figcaption>
    </figure>
  )
}
