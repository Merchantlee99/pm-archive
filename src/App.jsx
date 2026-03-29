import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { LiquidGlassDefs } from './components/LiquidGlassDefs'
import { MainPanel } from './components/MainPanel'
import { ProjectDetailPage } from './components/ProjectDetailPage'
import { RightHeroPanel } from './components/RightHeroPanel'
import { SiteFooter } from './components/SiteFooter'
import { footerData, projectView, rightPanel, siteMeta, writingView } from './data/homeData'
import { articleMatchesTopic, writingArticleMap } from './data/writingArticles'
import './App.css'

function getRoute() {
  const hash = window.location.hash || '#/'

  if (hash.startsWith('#/projects/')) {
    return {
      name: 'project',
      slug: hash.replace('#/projects/', ''),
    }
  }

  return {
    name: 'home',
  }
}

function App() {
  const [route, setRoute] = useState(getRoute)
  const [selectedArticleSlug, setSelectedArticleSlug] = useState(null)
  const [activeTopic, setActiveTopic] = useState('all')

  useEffect(() => {
    function handleHashChange() {
      setRoute(getRoute())
      setSelectedArticleSlug(null)
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

  const selectedArticle = selectedArticleSlug ? writingArticleMap[selectedArticleSlug] : null
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
    setSelectedArticleSlug(null)
    window.location.hash = '#/'
  }

  return (
    <main className="archive-home" id="top">
      <LiquidGlassDefs />

      <div className="archive-frame" aria-hidden="true">
        <div className="archive-frame__inner" />
      </div>

      <div className="archive-shell">
        <Header siteMeta={siteMeta} />

        {route.name === 'project' ? (
          <ProjectDetailPage project={projectView} />
        ) : (
          <div className="archive-layout">
            <MainPanel
              selectedArticle={selectedArticle}
              previousArticle={previousArticle}
              nextArticle={nextArticle}
              writingView={writingViewForRender}
              onBackFromArticle={() => setSelectedArticleSlug(null)}
              onSelectArticle={setSelectedArticleSlug}
            />
            <RightHeroPanel
              activeTopic={activeTopic}
              onSelectTopic={handleSelectTopic}
              panel={rightPanel}
            />
          </div>
        )}

        <SiteFooter {...footerData} />
      </div>
    </main>
  )
}

export default App
