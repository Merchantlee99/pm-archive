export function Header({ siteMeta }) {
  return (
    <header className="archive-header">
      <a className="archive-header__brand" href="#/">
        <strong>{siteMeta.title}</strong>
        <span>{siteMeta.subtitle}</span>
      </a>
    </header>
  )
}
