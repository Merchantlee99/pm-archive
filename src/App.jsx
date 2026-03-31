import { useEffect, useState } from 'react'
import { LiquidGlassDefs } from './components/LiquidGlassDefs'
import { MainPanel } from './components/MainPanel'
import { RightHeroPanel } from './components/RightHeroPanel'
import { SiteFooter } from './components/SiteFooter'
import { footerData, rightPanel, writingView } from './data/homeData'
import { articleMatchesTopic, writingArticleMap } from './data/writingArticles'
import './App.css'

function getRoute() {
  const hash = window.location.hash || '#/'

  if (hash.startsWith('#/writing/')) {
    return {
      name: 'article',
      slug: hash.replace('#/writing/', ''),
    }
  }

  if (hash !== '#/' && hash !== '#') {
    return {
      name: 'not-found',
      path: hash,
    }
  }

  return {
    name: 'home',
  }
}

function App() {
  const [route, setRoute] = useState(getRoute)
  const [activeTopic, setActiveTopic] = useState('all')

  useEffect(() => {
    function handleHashChange() {
      setRoute(getRoute())
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const filteredWritingItems =
    activeTopic === 'all'
      ? writingView.items
      : writingView.items.filter((article) => articleMatchesTopic(article, activeTopic))

  const writingViewForRender = {
    ...writingView,
    items: filteredWritingItems,
  }

  const selectedArticle = route.name === 'article' ? writingArticleMap[route.slug] ?? null : null
  const selectedArticleIndex = selectedArticle
    ? filteredWritingItems.findIndex((article) => article.slug === selectedArticle.slug)
    : -1
  const previousArticle =
    selectedArticleIndex > 0 ? filteredWritingItems[selectedArticleIndex - 1] : null
  const nextArticle =
    selectedArticleIndex >= 0 && selectedArticleIndex < filteredWritingItems.length - 1
      ? filteredWritingItems[selectedArticleIndex + 1]
      : null

  function handleSelectTopic(topicValue) {
    setActiveTopic(topicValue)
    window.location.hash = '#/'
  }

  function handleSelectArticle(slug) {
    window.location.hash = `#/writing/${slug}`
  }

  function handleBackFromArticle() {
    window.location.hash = '#/'
  }

  return (
    <main className="archive-home" id="top">
      <LiquidGlassDefs />

      <div className="archive-frame" aria-hidden="true">
        <div className="archive-frame__inner" />
      </div>

      <div className="archive-shell">
        <div className="archive-layout">
          <MainPanel
            routeName={route.name}
            selectedArticle={selectedArticle}
            previousArticle={previousArticle}
            nextArticle={nextArticle}
            writingView={writingViewForRender}
            onBackFromArticle={handleBackFromArticle}
            onSelectArticle={handleSelectArticle}
          />
          <RightHeroPanel
            activeTopic={activeTopic}
            onSelectTopic={handleSelectTopic}
            panel={rightPanel}
          />
        </div>

        <SiteFooter {...footerData} />
      </div>
    </main>
  )
}

export default App
