import { NotFoundView } from './NotFoundView'
import { WritingArticleView } from './WritingArticleView'
import { WritingFeedView } from './WritingFeedView'

export function MainPanel({
  routeName,
  selectedArticle,
  previousArticle,
  nextArticle,
  writingView,
  onBackFromArticle,
  onSelectArticle,
}) {
  return (
    <section className="archive-main-panel archive-main-panel--writing" aria-live="polite">
      <div className="archive-main-panel__switch archive-main-panel__switch--writing">
        {routeName === 'not-found' || (routeName === 'article' && !selectedArticle) ? (
          <NotFoundView onBack={onBackFromArticle} />
        ) : selectedArticle ? (
          <WritingArticleView
            article={selectedArticle}
            previousArticle={previousArticle}
            nextArticle={nextArticle}
            onBack={onBackFromArticle}
            onSelectArticle={onSelectArticle}
          />
        ) : (
          <WritingFeedView view={writingView} onSelectArticle={onSelectArticle} />
        )}
      </div>
    </section>
  )
}
