import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import heroPhoto from '../../assets/photos/hero.jpg'
import familyPhoto from '../../assets/photos/family.jpg'
import welcomePhoto from '../../assets/photos/welcome.jpg'
import { Reveal } from '../../shared/Reveal'
import {
  architecture,
  cloneAsset,
  cloneUrl,
  current,
  effects,
  hero,
  parts,
  statusLabel,
  type EffectStyle,
  type SiteGroup,
  type Status,
} from './content'

const h2 = 'font-corp text-[clamp(2rem,4.6vw,4rem)] leading-[1.15] font-bold tracking-tight text-balance'
const lead = 'mt-5 max-w-2xl text-lg leading-relaxed'

function Header() {
  return (
    <header className="sticky top-0 z-40 bg-lagoon text-paper">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6 md:px-10">
        <p className="font-corp text-lg font-bold tracking-tight">
          D-Link <span className="font-normal">Robotics</span>
          <span className="ml-3 hidden font-corp-body text-sm font-normal text-paper/75 sm:inline">官網規劃會前說明</span>
        </p>
        <nav aria-label="本頁" className="flex items-center gap-5 md:gap-8">
          {parts.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="hidden font-corp-body text-sm font-semibold text-paper no-underline hover:text-sun md:inline"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="bg-lagoon text-paper">
      <div className="grid min-h-[calc(100svh-4rem)] md:grid-cols-12">
        <div className="flex flex-col justify-center gap-10 px-6 py-14 md:col-span-7 md:py-20 md:pr-12 md:pl-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))]">
          <h1 className="font-corp text-[clamp(2.25rem,5.2vw,5rem)] leading-[1.08] font-bold tracking-tight">
            <span className="load-in block">{hero.lead}</span>
            <span className="load-in block" style={{ '--reveal-delay': '120ms' } as React.CSSProperties}>
              {hero.title}
            </span>
          </h1>
          <p
            className="load-in max-w-xl text-lg leading-relaxed text-paper"
            style={{ '--reveal-delay': '240ms' } as React.CSSProperties}
          >
            {hero.body}
          </p>
          <div
            className="load-in flex flex-wrap items-center gap-x-8 gap-y-4"
            style={{ '--reveal-delay': '360ms' } as React.CSSProperties}
          >
            <a
              href="#current"
              className="group inline-flex items-center gap-2 bg-sun px-7 py-4 font-corp-body text-base font-bold text-lagoon no-underline transition-colors hover:bg-paper"
            >
              從現行規劃開始
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#architecture" className="font-corp-body text-base font-semibold text-paper hover:text-sun">
              直接看建議架構
            </a>
          </div>
        </div>
        <img
          src={heroPhoto}
          alt={hero.photoAlt}
          className="block aspect-[4/3] w-full object-cover object-[72%_center] md:col-span-5 md:aspect-auto md:h-full"
        />
      </div>
    </section>
  )
}

function PageLinks({ pages, tone }: { pages: { label: string; to: string }[]; tone: string }) {
  return (
    <ul className="mt-8 mb-10 flex list-none flex-wrap gap-x-6 gap-y-3 p-0">
      {pages.map(({ label, to }) => (
        <li key={to}>
          <Link
            to={to}
            className={`group inline-flex items-center gap-1 font-corp-body text-base font-semibold no-underline ${tone}`}
          >
            {label}
            <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </li>
      ))}
    </ul>
  )
}

function CurrentPlans() {
  const { robotics, muru } = current
  return (
    <section id="current" className="scroll-mt-16 bg-paper py-20 text-lagoon md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <h2 className={h2}>{current.title}</h2>
          <p className={`${lead} text-lagoon`}>{current.body}</p>
        </Reveal>
        <div className="mt-14 grid gap-6 md:mt-20 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <article className="flex h-full flex-col bg-mist">
              <img src={familyPhoto} alt="" className="aspect-[2/1] w-full object-cover" />
              <div className="flex flex-1 flex-col p-8 md:p-10">
                <h3 className="font-corp text-3xl font-bold tracking-tight">{robotics.name}</h3>
                <p className="mt-3 max-w-xl text-base leading-relaxed">{robotics.body}</p>
                <PageLinks pages={robotics.pages} tone="text-lagoon hover:text-signal" />
                <Link
                  to={robotics.to}
                  className="group mt-auto inline-flex w-fit items-center gap-2 bg-lagoon px-7 py-4 font-corp-body text-base font-bold text-paper no-underline transition-colors hover:bg-lagoon-soft"
                >
                  {robotics.cta}
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          </Reveal>
          <Reveal className="md:col-span-5" delay={90}>
            <article className="flex h-full flex-col bg-sand text-bark">
              <img src={welcomePhoto} alt="" className="aspect-[16/9] w-full object-cover object-[50%_35%]" />
              <div className="flex flex-1 flex-col p-8 md:p-10">
                <h3 className="font-serif text-3xl font-bold tracking-tight">{muru.name}</h3>
                <p className="mt-3 max-w-md text-base leading-relaxed">{muru.body}</p>
                <PageLinks pages={muru.pages} tone="text-bark hover:text-clay" />
                <Link
                  to={muru.to}
                  className="group mt-auto inline-flex w-fit items-center gap-2 bg-bark px-7 py-4 font-corp-body text-base font-bold text-cream no-underline transition-colors hover:bg-bark-soft"
                >
                  {muru.cta}
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function StyleTile({ style }: { style: EffectStyle }) {
  const { tile, mount } = style
  const href = cloneUrl(mount)
  return (
    <a href={href} className="group block overflow-hidden bg-paper no-underline">
      {tile.kind === 'image' ? (
        <img
          src={cloneAsset(mount, tile.src)}
          alt={tile.alt}
          className={`aspect-square w-full transition-transform duration-700 group-hover:scale-[1.03] ${
            tile.cover ? 'object-cover' : 'object-contain p-6'
          }`}
        />
      ) : (
        <video
          src={`${cloneAsset(mount, tile.src)}#t=0.5`}
          aria-label="Figure 風格示範頁的首屏影片"
          className="aspect-square w-full bg-lagoon object-cover"
          muted
          loop
          playsInline
          preload="metadata"
          onMouseEnter={(event) => void event.currentTarget.play().catch(() => {})}
          onMouseLeave={(event) => event.currentTarget.pause()}
        />
      )}
    </a>
  )
}

function Effects() {
  const [activeId, setActiveId] = useState(effects.styles[0].id)
  const style = effects.styles.find(({ id }) => id === activeId) ?? effects.styles[0]

  return (
    <section id="effects" className="scroll-mt-16 bg-mist py-20 text-lagoon md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <h2 className={h2}>{effects.title}</h2>
          <p className={`${lead} text-lagoon`}>{effects.body}</p>
          <div role="tablist" aria-label="示範頁風格" className="mt-8 flex flex-wrap gap-3">
            {effects.styles.map(({ id, label }) => {
              const selected = id === activeId
              return (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  id={`effects-tab-${id}`}
                  aria-selected={selected}
                  aria-controls="effects-panel"
                  onClick={() => setActiveId(id)}
                  className={`cursor-pointer px-6 py-3 font-corp-body text-base font-bold transition-colors ${
                    selected ? 'bg-lagoon text-paper' : 'bg-paper text-lagoon hover:bg-lagoon hover:text-paper'
                  }`}
                >
                  {label}
                </button>
              )
            })}
          </div>
        </Reveal>
        <div
          id="effects-panel"
          role="tabpanel"
          aria-labelledby={`effects-tab-${style.id}`}
          className="mt-10 grid gap-10 md:mt-14 md:grid-cols-12 md:gap-14"
        >
          <div className="md:sticky md:top-24 md:col-span-5 md:self-start">
            <StyleTile key={style.id} style={style} />
            <p className="mt-4 max-w-sm text-sm leading-relaxed">{style.tileCaption}</p>
            <a
              href={cloneUrl(style.mount)}
              className="group mt-6 inline-flex items-center gap-2 bg-lagoon px-7 py-4 font-corp-body text-base font-bold text-paper no-underline transition-colors hover:bg-lagoon-soft"
            >
              {style.cta}
              <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
          <ul className="m-0 flex list-none flex-col gap-3 p-0 md:col-span-7">
            {style.items.map((item, index) => (
              <li key={`${style.id}-${item.name}`}>
                <Reveal delay={index * 60}>
                  <a
                    href={cloneUrl(style.mount, item.hash)}
                    className="group grid gap-3 bg-paper p-6 text-lagoon no-underline transition-colors hover:bg-lagoon hover:text-paper md:grid-cols-2 md:gap-8 md:p-8"
                  >
                    <span>
                      <span className="flex items-center gap-2 font-corp text-xl font-bold">
                        {item.name}
                        <ArrowUpRight
                          size={18}
                          className="shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </span>
                      <span className="mt-2 block text-base leading-relaxed">{item.how}</span>
                      {item.hint && <span className="mt-1 block text-sm leading-relaxed">{item.hint}</span>}
                    </span>
                    <span className="text-base leading-relaxed">
                      <span className="block font-bold text-lagoon-soft group-hover:text-sun">建議用在</span>
                      {item.useFor}
                    </span>
                  </a>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

const marker: Record<Status, string> = {
  demo: 'bg-sun',
  stub: 'bg-paper/45',
  proposed: 'bg-signal',
}

function StatusMark({ status }: { status: Status }) {
  return (
    <span className="inline-flex items-center gap-2 text-sm text-paper">
      <span aria-hidden="true" className={`size-2.5 ${marker[status]}`} />
      {statusLabel[status]}
    </span>
  )
}

function GroupDetail({ group }: { group: SiteGroup }) {
  return (
    <div className="bg-lagoon-soft p-8 md:p-12">
      <h3 className="font-corp text-3xl font-bold tracking-tight md:text-4xl">{group.name}</h3>
      <p className="mt-3 max-w-xl text-lg leading-relaxed">{group.role}</p>
      <ul className="mt-10 grid list-none gap-3 p-0 sm:grid-cols-2">
        {group.pages.map((page) => {
          const body = (
            <>
              <span className="flex items-center justify-between gap-3 font-corp-body text-lg font-bold">
                {page.name}
                {page.to && <ArrowUpRight size={16} className="shrink-0" />}
              </span>
              <StatusMark status={page.status} />
              {page.note && <span className="mt-2 block text-sm leading-relaxed text-paper">{page.note}</span>}
            </>
          )
          return (
            <li key={page.name}>
              {page.to ? (
                <Link
                  to={page.to}
                  className="flex h-full flex-col gap-1 bg-lagoon p-5 text-paper no-underline transition-colors hover:bg-signal"
                >
                  {body}
                </Link>
              ) : (
                <div className="flex h-full flex-col gap-1 bg-lagoon p-5 text-paper">{body}</div>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

function Architecture() {
  const [activeId, setActiveId] = useState(architecture.groups[0].id)
  const active = architecture.groups.find((group) => group.id === activeId) ?? architecture.groups[0]

  return (
    <section id="architecture" className="scroll-mt-16 bg-lagoon py-20 text-paper md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <h2 className={h2}>{architecture.title}</h2>
          <p className={`${lead} text-paper`}>{architecture.body}</p>
        </Reveal>
        <div className="mt-14 grid gap-6 md:mt-20 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <ul className="m-0 flex list-none flex-col gap-2 p-0" role="tablist" aria-label="網站分類" aria-orientation="vertical">
              {architecture.groups.map((group) => {
                const selected = group.id === activeId
                return (
                  <li key={group.id}>
                    <button
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      onClick={() => setActiveId(group.id)}
                      className={`flex w-full cursor-pointer flex-col items-start gap-1 p-5 text-left transition-colors md:p-6 ${
                        selected ? 'bg-paper text-lagoon' : 'bg-lagoon-soft text-paper hover:bg-signal'
                      }`}
                    >
                      <span className="font-corp text-2xl font-bold tracking-tight">{group.name}</span>
                      <span className="text-sm">{group.pages.length} 個項目</span>
                    </button>
                  </li>
                )
              })}
            </ul>
            <p className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {(Object.keys(statusLabel) as Status[]).map((status) => (
                <StatusMark key={status} status={status} />
              ))}
            </p>
          </Reveal>
          <Reveal className="md:col-span-8" delay={90}>
            <div role="tabpanel" aria-live="polite">
              <GroupDetail group={active} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function HubPage() {
  useEffect(() => {
    document.title = 'D-Link Robotics 官網規劃會前說明'
  }, [])

  return (
    <div className="corp bg-lagoon font-corp-body">
      <Header />
      <main>
        <Hero />
        <CurrentPlans />
        <Effects />
        <Architecture />
      </main>
    </div>
  )
}
