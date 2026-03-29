function parseArticleBlocks(content) {
  const lines = content.split('\n')
  const blocks = []
  let paragraph = []
  let list = null

  function flushParagraph() {
    if (!paragraph.length) return
    blocks.push({
      type: 'paragraph',
      text: paragraph.join(' ').replaceAll('  ', ' ').trim(),
    })
    paragraph = []
  }

  function flushList() {
    if (!list || !list.items.length) return
    blocks.push(list)
    list = null
  }

  for (const rawLine of lines) {
    const line = rawLine.trim()

    if (!line) {
      flushParagraph()
      flushList()
      continue
    }

    if (line.startsWith('## ')) {
      flushParagraph()
      flushList()
      blocks.push({ type: 'heading-2', text: line.replace(/^##\s+/, '') })
      continue
    }

    if (line.startsWith('### ')) {
      flushParagraph()
      flushList()
      blocks.push({ type: 'heading-3', text: line.replace(/^###\s+/, '') })
      continue
    }

    if (/^\d+\.\s+/.test(line)) {
      flushParagraph()
      const text = line.replace(/^\d+\.\s+/, '')
      if (!list || list.type !== 'ordered-list') {
        flushList()
        list = { type: 'ordered-list', items: [] }
      }
      list.items.push(text)
      continue
    }

    if (line.startsWith('- ')) {
      flushParagraph()
      const text = line.replace(/^- /, '')
      if (!list || list.type !== 'unordered-list') {
        flushList()
        list = { type: 'unordered-list', items: [] }
      }
      list.items.push(text)
      continue
    }

    flushList()
    paragraph.push(line)
  }

  flushParagraph()
  flushList()

  return blocks
}

function ArticleNavButton({ children, onClick, disabled = false }) {
  return (
    <button
      type="button"
      className={`archive-topic-chip archive-article-nav-button${disabled ? ' archive-article-nav-button--disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="archive-liquid-effect archive-liquid-effect--button archive-liquid-effect--interactive" aria-hidden="true" />
      <span className="archive-liquid-tint archive-liquid-tint--button archive-liquid-tint--interactive" aria-hidden="true" />
      <span className="archive-liquid-shine archive-liquid-shine--button archive-liquid-shine--interactive" aria-hidden="true" />
      <span className="archive-topic-chip__text">{children}</span>
    </button>
  )
}

export function WritingArticleView({ article, previousArticle, nextArticle, onBack, onSelectArticle }) {
  const blocks = parseArticleBlocks(article.content)

  return (
    <article className="archive-article-view">
      <header className="archive-article-view__header">
        <p className="archive-note">{article.meta}</p>
        <h1>{article.title}</h1>
        <p className="archive-article-view__excerpt">{article.excerpt}</p>
      </header>

      <div className="archive-article-body">
        {blocks.map((block, index) => {
          if (block.type === 'heading-2') {
            return <h2 key={`${block.text}-${index}`}>{block.text}</h2>
          }

          if (block.type === 'heading-3') {
            return <h3 key={`${block.text}-${index}`}>{block.text}</h3>
          }

          if (block.type === 'unordered-list') {
            return (
              <ul key={`ul-${index}`}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )
          }

          if (block.type === 'ordered-list') {
            return (
              <ol key={`ol-${index}`}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            )
          }

          return <p key={`${block.text.slice(0, 24)}-${index}`}>{block.text}</p>
        })}
      </div>

      <footer className="archive-article-actions">
        <ArticleNavButton
          onClick={() => previousArticle && onSelectArticle(previousArticle.slug)}
          disabled={!previousArticle}
        >
          이전 글
        </ArticleNavButton>
        <ArticleNavButton onClick={onBack}>목록으로 돌아가기</ArticleNavButton>
        <ArticleNavButton
          onClick={() => nextArticle && onSelectArticle(nextArticle.slug)}
          disabled={!nextArticle}
        >
          다음 글
        </ArticleNavButton>
      </footer>
    </article>
  )
}
