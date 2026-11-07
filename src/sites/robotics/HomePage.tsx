import { ArrowRight, ArrowUpRight, AudioWaveform, Cpu } from 'lucide-react'
import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import family from '../../assets/photos/family.jpg'
import heroPhoto from '../../assets/photos/hero.jpg'
import { Reveal } from '../../shared/Reveal'
import { BreathLine } from './BreathLine'
import { ContactForm } from './ContactForm'
import { dna, hero, news, products, support } from './content'

function Label({ en, zh, tone = 'dark' }: { en: string; zh: string; tone?: 'dark' | 'light' }) {
  return (
    <p className={`flex items-baseline gap-3 ${tone === 'dark' ? 'text-signal' : 'text-sun'}`}>
      <span className="font-corp text-sm font-bold">{en}</span>
      <span className="text-sm">{zh}</span>
    </p>
  )
}

function Hero() {
  return (
    <section className="relative flex flex-col overflow-hidden bg-lagoon text-paper md:h-svh md:min-h-[720px] md:justify-end">
      <img
        src={family}
        alt="一家三代圍坐在陽光灑落的客廳，與 MuRu 互動。"
        className="relative block aspect-[4/5] w-full object-cover object-center md:absolute md:inset-0 md:aspect-auto md:size-full md:object-[12%_top]"
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 aspect-[4/5] bg-[linear-gradient(to_bottom,rgb(14_52_56/0.55),transparent_26%)] md:inset-0 md:aspect-auto md:bg-[linear-gradient(82deg,rgb(14_52_56/0.88),rgb(14_52_56/0.5)_34%,transparent_56%),linear-gradient(to_bottom,rgb(14_52_56/0.5),transparent_20%)]" />
      <div className="relative mx-auto w-full max-w-7xl px-6 pt-8 pb-8 md:px-10 md:pt-0 md:pb-24">
        <p className="load-in font-corp text-2xl font-medium text-sun md:text-3xl">{hero.en}</p>
        <h1
          className="load-in mt-4 text-[1.875rem] leading-[1.3] font-bold tracking-tight md:text-[3.5rem]"
          style={{ '--reveal-delay': '150ms' } as CSSProperties}
        >
          {hero.zh[0]}
          <br />
          {hero.zh[1]}
        </h1>
      </div>
      <BreathLine className="relative mb-3 text-sun/70" />
    </section>
  )
}

function Philosophy() {
  return (
    <section id="philosophy" className="scroll-mt-20 bg-paper">
      <Reveal className="mx-auto grid max-w-7xl gap-8 px-6 py-24 md:grid-cols-[1fr_3fr] md:px-10 md:py-36">
        <Label en="Our Philosophy" zh="品牌精神" />
        <p className="text-2xl leading-[1.7] font-medium md:text-4xl md:leading-[1.65]">{hero.body}</p>
      </Reveal>
    </section>
  )
}

function SignalArcs() {
  return (
    <svg aria-hidden="true" viewBox="0 0 320 320" className="absolute right-0 bottom-0 size-[22rem] text-signal" fill="none">
      {[60, 110, 160, 210, 260].map((radius, index) => (
        <circle
          key={radius}
          cx="320"
          cy="320"
          r={radius}
          stroke="currentColor"
          strokeOpacity={1 - index * 0.17}
          strokeWidth="1.25"
          className="glow-pulse"
          style={{ animationDelay: `${index * 0.5}s` }}
        />
      ))}
      <circle cx="320" cy="320" r="18" fill="#f2b872" />
    </svg>
  )
}

function Dna() {
  const [secure, edge, empathic] = dna.cards
  const titleFor = (card: (typeof dna.cards)[number]) => (
    <>
      <h3 className="font-corp text-3xl font-bold tracking-tight">{card.en}</h3>
      <p className="mt-1 text-sm font-semibold opacity-75">{card.zh}</p>
    </>
  )
  return (
    <section id="technology" className="scroll-mt-20 bg-mist">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <Reveal>
          <Label en="Technology" zh="核心技術" />
          <h2 className="mt-5 font-corp text-5xl font-bold tracking-tight md:text-7xl">{dna.en}</h2>
          <p className="mt-3 text-xl text-slate md:text-2xl">{dna.zh}</p>
        </Reveal>
        <Reveal className="mt-14 grid gap-4 md:grid-cols-2 md:grid-rows-2">
          <article className="relative min-h-[420px] overflow-hidden rounded-[20px] bg-lagoon p-8 text-paper md:row-span-2 md:p-10">
            {titleFor(secure)}
            <p className="relative mt-6 max-w-md leading-relaxed text-paper/80">{secure.body}</p>
            <SignalArcs />
          </article>
          <article className="rounded-[20px] bg-paper p-8 md:p-10">
            <Cpu size={28} strokeWidth={1.5} className="mb-5 text-signal" aria-hidden="true" />
            {titleFor(edge)}
            <p className="mt-5 leading-relaxed text-slate">{edge.body}</p>
          </article>
          <article className="rounded-[20px] bg-paper p-8 md:p-10">
            <AudioWaveform size={28} strokeWidth={1.5} className="mb-5 text-signal" aria-hidden="true" />
            {titleFor(empathic)}
            <p className="mt-5 leading-relaxed text-slate">{empathic.body}</p>
          </article>
        </Reveal>
      </div>
    </section>
  )
}

function Products() {
  return (
    <section id="products" className="scroll-mt-20 bg-lagoon text-paper">
      <div className="relative flex flex-col justify-center overflow-hidden md:min-h-[760px]">
        <img
          src={heroPhoto}
          alt={products.photoAlt}
          className="relative block aspect-square w-full object-cover object-[60%_center] md:absolute md:inset-0 md:aspect-auto md:size-full md:object-[46%_center]"
        />
        <div className="pointer-events-none absolute inset-0 hidden md:block md:bg-[linear-gradient(90deg,rgb(14_52_56/0.82),rgb(14_52_56/0.4)_40%,transparent_58%)]" />
        <Reveal className="relative mx-auto w-full max-w-7xl px-6 pt-10 pb-6 md:px-10 md:py-0">
          <p className="font-corp text-xs font-bold tracking-[0.16em] text-sun">{products.eyebrowEn}</p>
          <p className="mt-1 text-sm">{products.eyebrowZh}</p>
          <h2 className="mt-6 max-w-[9.5em] font-corp text-[2.5rem] leading-[1.1] font-bold tracking-tight md:text-6xl">{products.en}</h2>
          <p className="mt-4 max-w-md text-lg">{products.zh}</p>
          <Link
            to="/muru"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-sun px-7 py-3.5 font-corp text-sm font-bold text-lagoon no-underline transition-colors hover:bg-paper"
          >
            {products.ctaEn} {products.ctaZh}
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
      <ul className="mx-auto grid max-w-7xl list-none gap-px p-0 md:grid-cols-3">
        {products.upcoming.map((name) => (
          <li key={name} className="px-6 py-10 md:px-10">
            <p className="font-corp text-xs font-bold tracking-[0.16em] text-sun uppercase">{products.upcomingLabel}</p>
            <h3 className="mt-3 text-3xl font-bold">{name}</h3>
            <p className="mt-2 text-sm text-paper/70">{products.upcomingBody}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

function News() {
  return (
    <section id="news" className="scroll-mt-20 bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <Reveal>
          <Label en="News" zh="新聞中心" />
          <h2 className="mt-5 font-corp text-5xl font-bold tracking-tight md:text-6xl">Latest Updates</h2>
          <p className="mt-3 text-xl text-slate">最新動態</p>
        </Reveal>
        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {news.map((item, index) => (
            <Reveal key={item.slug} delay={index * 120}>
              <article className="flex h-full flex-col border-t-2 border-lagoon pt-5">
                <p className="text-sm font-bold text-signal">{item.category}</p>
                <h3 className="mt-3 flex-1 text-xl leading-relaxed font-bold">{item.title}</h3>
                <Link
                  to={`/robotics/news/${item.slug}`}
                  aria-label={`Read More：${item.title}`}
                  className="group mt-5 inline-flex w-fit items-center gap-1.5 font-corp text-sm font-bold text-lagoon no-underline hover:text-signal"
                >
                  Read More
                  <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Support() {
  return (
    <section id="support" className="scroll-mt-20 bg-mist">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <Reveal>
          <Label en="Support" zh="支援與聯絡" />
          <h2 className="mt-5 font-corp text-5xl font-bold tracking-tight md:text-7xl">{support.en}</h2>
          <p className="mt-3 text-xl text-slate md:text-2xl">{support.zh}</p>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <Reveal className="rounded-[20px] bg-lagoon p-8 text-paper md:p-10">
            <h3 className="font-corp text-3xl font-bold tracking-tight">{support.help.en}</h3>
            <p className="mt-1 text-sm font-semibold text-paper/75">{support.help.zh}</p>
            <p className="mt-5 leading-relaxed text-paper/80">{support.help.body}</p>
            <ul className="mt-8 list-none border-t border-paper/15 p-0">
              {support.help.links.map(({ to, en, zh }) => (
                <li key={to} className="border-b border-paper/15">
                  <Link to={to} className="group flex items-center justify-between py-4 text-paper no-underline hover:text-sun">
                    <span>
                      <span className="font-corp font-semibold">{en}</span>
                      <span className="ml-3 text-sm text-paper/70">{zh}</span>
                    </span>
                    <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="rounded-[20px] bg-paper p-8 md:p-10">
            <h3 className="font-corp text-3xl font-bold tracking-tight">{support.partner.en}</h3>
            <p className="mt-1 text-sm font-semibold text-slate">{support.partner.zh}</p>
            <p className="mt-5 leading-relaxed text-slate">{support.partner.body}</p>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function HomePage() {
  return (
    <>
      <Hero />
      <Philosophy />
      <Dna />
      <Products />
      <News />
      <Support />
    </>
  )
}
