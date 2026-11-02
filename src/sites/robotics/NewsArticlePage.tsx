import { ArrowLeft } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { news } from './content'

export function NewsArticlePage() {
  const { slug } = useParams()
  const article = news.find((item) => item.slug === slug)
  if (!article) return <Navigate to="/#news" replace />

  return (
    <article className="mx-auto max-w-3xl px-6 pt-36 pb-24 md:pt-44 md:pb-32">
      <Link
        to="/#news"
        className="inline-flex items-center gap-1.5 font-corp text-sm font-bold text-signal no-underline"
      >
        <ArrowLeft size={15} />
        Latest Updates
      </Link>
      <p className="mt-10 text-sm font-bold text-signal">{article.category}</p>
      <h1 className="mt-3 text-3xl leading-snug font-bold md:text-5xl md:leading-snug">{article.title}</h1>
      <div className="mt-8 flex flex-col gap-5 text-lg leading-relaxed text-slate">
        {article.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <p className="mt-10 border-t border-lagoon/15 pt-5 text-sm text-slate">完整新聞稿將於正式上線時提供。</p>
    </article>
  )
}
