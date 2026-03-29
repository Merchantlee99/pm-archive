function LiquidModule({ as: Tag = 'section', className, id, children, tilt = 0, ...rest }) {
  return (
    <Tag
      {...rest}
      className={`${className} archive-glass-static archive-glass-static--module`}
      id={id}
    >
      <span className="archive-liquid-effect archive-liquid-effect--card archive-liquid-effect--module" aria-hidden="true" />
      <span className="archive-liquid-tint archive-liquid-tint--card archive-liquid-tint--module" aria-hidden="true" />
      <span className="archive-liquid-shine archive-liquid-shine--card archive-liquid-shine--module" aria-hidden="true" />
      {children}
    </Tag>
  )
}

function LiquidAction({ as: Tag = 'a', className, children, tilt = 0, ...rest }) {
  return (
    <Tag
      {...rest}
      className={`${className} archive-glass-static archive-glass-static--interactive`}
    >
      <span className="archive-liquid-effect archive-liquid-effect--button archive-liquid-effect--interactive" aria-hidden="true" />
      <span className="archive-liquid-tint archive-liquid-tint--button archive-liquid-tint--interactive" aria-hidden="true" />
      <span className="archive-liquid-shine archive-liquid-shine--button archive-liquid-shine--interactive" aria-hidden="true" />
      {children}
    </Tag>
  )
}

export function RightHeroPanel({ panel, activeTopic, onSelectTopic }) {
  return (
    <aside className="archive-sidebar-rail">
      <div className="archive-sidebar-rail__background" aria-hidden="true" />
      <div className="archive-sidebar-rail__shell archive-liquid-shell">
        <span className="archive-liquid-effect archive-liquid-effect--shell" aria-hidden="true" />
        <span className="archive-liquid-tint archive-liquid-tint--shell" aria-hidden="true" />
        <span className="archive-liquid-shine archive-liquid-shine--shell" aria-hidden="true" />
        <LiquidModule className="archive-sidebar-module archive-sidebar-module--about" id="about">
          <p className="archive-note">{panel.about.kicker}</p>
          <h2>{panel.about.title}</h2>
          <p>{panel.about.description}</p>
        </LiquidModule>

        <LiquidModule className="archive-sidebar-module archive-sidebar-module--links" id="links">
          <p className="archive-note">{panel.links.kicker}</p>
          <div className="archive-contact-list">
            {panel.links.items.map((item) => (
              <LiquidAction
                key={item.label}
                className="archive-sidebar-cta"
                href={item.href}
                aria-label={item.ariaLabel ?? item.label}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <strong>{item.value}</strong>
              </LiquidAction>
            ))}
          </div>
        </LiquidModule>

        <LiquidModule className="archive-sidebar-module archive-sidebar-module--featured" tilt={0}>
          <p className="archive-note">{panel.featuredProject.kicker}</p>
          <p className="archive-sidebar-project__meta">{panel.featuredProject.meta}</p>
          <h2 className="archive-sidebar-project__title">
            <a href={panel.featuredProject.href}>{panel.featuredProject.title}</a>
          </h2>
          <p>{panel.featuredProject.description}</p>
        </LiquidModule>

        <LiquidModule className="archive-sidebar-module archive-sidebar-module--topics" tilt={0}>
          <p className="archive-note">{panel.tags.kicker}</p>
          <div className="archive-topic-list">
            {panel.tags.items.map((topic) => (
              <LiquidAction
                key={topic.value}
                as="button"
                type="button"
                className={`archive-topic-chip${activeTopic === topic.value ? ' archive-topic-chip--active' : ''}`}
                onClick={() => onSelectTopic(topic.value)}
              >
                <span className="archive-topic-chip__text">{topic.label}</span>
                <strong>{topic.count}</strong>
              </LiquidAction>
            ))}
          </div>
        </LiquidModule>
      </div>
    </aside>
  )
}
