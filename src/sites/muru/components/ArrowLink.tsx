import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

interface ArrowLinkProps {
  to: string
  children: string
  tone?: 'dark' | 'light'
}

export function ArrowLink({ to, children, tone = 'dark' }: ArrowLinkProps) {
  const color = tone === 'dark' ? 'text-bark border-clay/50' : 'text-peach border-peach/50'
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-2 border-b pb-1.5 text-sm font-bold no-underline ${color}`}
    >
      {children}
      <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  )
}
