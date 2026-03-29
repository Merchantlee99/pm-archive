export function FocusInfographic({ items }) {
  return (
    <div className="archive-focus-graphic" aria-label="Current Focus infographic">
      <div className="archive-focus-graphic__line" aria-hidden="true" />
      {items.map((item, index) => (
        <div
          key={item.label}
          className={`archive-focus-graphic__node${item.active ? ' archive-focus-graphic__node--active' : ''}`}
        >
          <div className="archive-focus-graphic__marker" aria-hidden="true">
            <span>{String(index + 1).padStart(2, '0')}</span>
          </div>
          <div className="archive-focus-graphic__content">
            <p>{item.label}</p>
            <strong>{item.value}</strong>
          </div>
        </div>
      ))}
    </div>
  )
}
