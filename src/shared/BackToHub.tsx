import { ArrowLeft } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

/** Speaker aid: a way back to the talk's home page from any demo page. */
export function BackToHub() {
  const { pathname } = useLocation()
  if (pathname === '/') return null

  return (
    <Link
      to="/"
      className="fixed bottom-4 left-4 z-[60] inline-flex items-center gap-2 bg-lagoon px-4 py-3 font-corp-body text-sm font-bold text-paper no-underline transition-colors hover:bg-signal"
    >
      <ArrowLeft size={16} />
      簡報主頁
    </Link>
  )
}
