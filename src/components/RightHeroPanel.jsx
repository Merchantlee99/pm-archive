function LiquidModule({ as: Tag = 'section', className, id, children, tilt = 0, ...rest }) {
  return (
    <Tag
      {...rest}
      className={`${className} archive-glass-static archive-glass-static--module`}
      id={id}
    >
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
      {children}
    </Tag>
  )
}

function ContactIcon({ label }) {
  if (label === 'Email') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="archive-sidebar-cta__icon">
        <path
          d="M4 7.25A2.25 2.25 0 0 1 6.25 5h11.5A2.25 2.25 0 0 1 20 7.25v9.5A2.25 2.25 0 0 1 17.75 19H6.25A2.25 2.25 0 0 1 4 16.75v-9.5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="m5.5 7.5 5.55 4.16a1.6 1.6 0 0 0 1.9 0L18.5 7.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  if (label === 'GitHub') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="archive-sidebar-cta__icon">
        <path
          d="M12 3.8a8.2 8.2 0 0 0-2.59 15.98c.41.08.56-.18.56-.4v-1.4c-2.27.49-2.75-.96-2.75-.96-.37-.93-.9-1.18-.9-1.18-.74-.5.06-.49.06-.49.81.06 1.24.84 1.24.84.73 1.24 1.9.88 2.37.67.07-.52.28-.88.51-1.08-1.81-.2-3.71-.9-3.71-4.02 0-.89.32-1.62.84-2.2-.08-.2-.36-1.03.08-2.14 0 0 .69-.22 2.27.84A7.8 7.8 0 0 1 12 7.73c.69 0 1.39.09 2.04.26 1.58-1.06 2.27-.84 2.27-.84.44 1.11.16 1.94.08 2.14.52.58.84 1.31.84 2.2 0 3.13-1.91 3.82-3.73 4.01.29.25.56.75.56 1.52v2.25c0 .22.15.48.57.4A8.2 8.2 0 0 0 12 3.8Z"
          fill="currentColor"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="archive-sidebar-cta__icon">
      <path
        d="M6.7 8.2a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm-1.3 2.2h2.6V19H5.4v-8.6Zm4.2 0h2.5v1.2h.04c.35-.66 1.2-1.36 2.47-1.36 2.64 0 3.13 1.73 3.13 3.98V19h-2.6v-4.23c0-1.01-.02-2.3-1.4-2.3-1.4 0-1.61 1.09-1.61 2.22V19H9.6v-8.6Z"
        fill="currentColor"
      />
    </svg>
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
                <ContactIcon label={item.label} />
                <strong>{item.label}</strong>
              </LiquidAction>
            ))}
          </div>
        </LiquidModule>

        <LiquidModule className="archive-sidebar-module archive-sidebar-module--featured" tilt={0}>
          <p className="archive-note">{panel.featuredProject.kicker}</p>
          <LiquidAction
            className="archive-sidebar-cta archive-sidebar-project-link"
            href={panel.featuredProject.href}
            aria-label={`${panel.featuredProject.title} 열기`}
            target="_blank"
            rel="noreferrer"
          >
            <strong>{panel.featuredProject.title}</strong>
          </LiquidAction>
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
