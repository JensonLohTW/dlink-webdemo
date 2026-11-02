import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Resets scroll on navigation and honours #anchors, including across routes. */
export function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' })
      return
    }
    const frame = requestAnimationFrame(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    })
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash])

  return null
}
