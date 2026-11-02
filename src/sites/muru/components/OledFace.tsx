import { useEffect, useRef, type CSSProperties } from 'react'

export type Mood = 'breathe' | 'curious' | 'happy' | 'sleepy'

interface OledFaceProps {
  size: number
  mood?: Mood
  /** Eyes follow the pointer, as MuRu turns toward whoever is nearby. */
  follow?: boolean
  className?: string
}

export function OledFace({ size, mood = 'breathe', follow = false, className = '' }: OledFaceProps) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!follow || !node) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const reach = size * 0.07
    const onMove = (event: PointerEvent) => {
      const box = node.getBoundingClientRect()
      const dx = event.clientX - (box.left + box.width / 2)
      const dy = event.clientY - (box.top + box.height / 2)
      const distance = Math.hypot(dx, dy) || 1
      const pull = Math.min(distance / 260, 1) * reach
      node.style.setProperty('--look-x', `${(dx / distance) * pull}px`)
      node.style.setProperty('--look-y', `${(dy / distance) * pull}px`)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [follow, size])

  return (
    <span
      ref={ref}
      aria-hidden="true"
      className={`oled ${className}`}
      data-mood={mood}
      style={{ '--size': `${size}px` } as CSSProperties}
    >
      <span className="oled-eye" />
      <span className="oled-eye" />
    </span>
  )
}
