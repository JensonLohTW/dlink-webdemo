import { Fingerprint, MonitorSmartphone, RadioTower, Sparkles, type LucideIcon } from 'lucide-react'
import type { CSSProperties, ReactNode } from 'react'
import { Reveal } from '../../../shared/Reveal'
import type { Heading } from '../content/types'
import { useLanguage } from '../language-context'
import { ArrowLink } from './ArrowLink'
import { OledFace } from './OledFace'

function Tile({
  copy,
  Icon,
  className = '',
  children,
}: {
  copy: Heading
  Icon: LucideIcon
  className?: string
  children?: ReactNode
}) {
  return (
    <article
      className={`relative overflow-hidden rounded-3xl border border-cream/10 bg-gradient-to-br from-[#4f3528] to-[#3f2b21] p-7 ${className}`}
    >
      <div className="flex items-start justify-between gap-4">
        <p className="eyebrow text-peach">{copy.tagline}</p>
        <Icon size={26} className="shrink-0 text-peach/80" strokeWidth={1.5} />
      </div>
      <h3 className="display mt-3 text-[1.75rem]">{copy.headline}</h3>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/70">{copy.body}</p>
      {children}
    </article>
  )
}

const barHeights = [28, 56, 40, 88, 52, 72, 30, 64]

function SoundBars() {
  return (
    <div aria-hidden="true" className="mt-6 flex h-24 items-end gap-4 md:absolute md:right-8 md:bottom-7 md:mt-0">
      {barHeights.map((height, index) => (
        <span
          key={index}
          className="sound-bar w-px bg-peach/80"
          style={{ height, '--i': index } as CSSProperties}
        />
      ))}
    </div>
  )
}

export function SpecTable() {
  const { specs } = useLanguage().t
  return (
    <Reveal className="mt-20 border-t border-cream/15 pt-14">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h3 className="display text-4xl">{specs.headline}</h3>
        <p className="eyebrow text-peach">{specs.label}</p>
      </div>
      <div className="mt-8 overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <thead>
            <tr>
              {specs.columns.map((column) => (
                <th key={column} scope="col" className="eyebrow border-b border-cream/15 py-4 pr-6 text-peach">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {specs.rows.map(([system, purpose, detail]) => (
              <tr key={system} className="border-b border-cream/10">
                <th scope="row" className="py-5 pr-6 align-top font-medium text-peach/90">
                  {system}
                </th>
                <td className="py-5 pr-6 align-top text-cream/70">{purpose}</td>
                <td className="py-5 align-top font-semibold text-cream">{detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Reveal>
  )
}

export function TechnologySection() {
  const { technology: copy } = useLanguage().t
  return (
    <section className="bg-bark text-cream">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <Reveal className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end">
          <div>
            <p className="eyebrow text-peach">{copy.tagline}</p>
            <h2 className="display mt-5 text-5xl md:text-7xl">{copy.headline}</h2>
          </div>
          <p className="leading-relaxed text-cream/75">{copy.body}</p>
        </Reveal>

        <Reveal className="mt-14 grid gap-4 md:grid-cols-[1.25fr_1fr_1fr]">
          <Tile copy={copy.sense} Icon={Fingerprint} className="min-h-[420px] md:row-span-2">
            <OledFace size={240} mood="curious" follow className="absolute -right-10 -bottom-12" />
          </Tile>
          <Tile copy={copy.glow} Icon={Sparkles} />
          <Tile copy={copy.connect} Icon={MonitorSmartphone} />
          <Tile copy={copy.listen} Icon={RadioTower} className="md:col-span-2 md:min-h-[200px] md:pr-52">
            <SoundBars />
          </Tile>
        </Reveal>

        <SpecTable />

        <div className="mt-10">
          <ArrowLink to="/muru/technology" tone="light">
            {copy.more}
          </ArrowLink>
        </div>
      </div>
    </section>
  )
}
