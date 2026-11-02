import { Heart, type LucideIcon } from 'lucide-react'
import reading from '../../../assets/photos/reading.jpg'
import remote from '../../../assets/photos/remote.jpg'
import welcome from '../../../assets/photos/welcome.jpg'
import { Reveal } from '../../../shared/Reveal'
import type { FeatureCard } from '../content/types'
import { useLanguage } from '../language-context'
import { ArrowLink } from './ArrowLink'
import { OledFace } from './OledFace'

function Copy({ card }: { card: FeatureCard }) {
  return (
    <div className="flex flex-col justify-center bg-sand p-8 md:p-14">
      <p className="text-xs font-bold tracking-wider text-clay">{card.tagline}</p>
      <h3 className="display mt-4 text-4xl md:text-5xl">{card.headline}</h3>
      <p className="mt-5 leading-relaxed text-umber">{card.body}</p>
      <div className="mt-7">
        <ArrowLink to={`/muru/${card.linkTo}`}>{card.linkLabel}</ArrowLink>
      </div>
    </div>
  )
}

function PhotoCard({ card, src, alt, flip }: { card: FeatureCard; src: string; alt: string; flip?: boolean }) {
  return (
    <article className="grid overflow-hidden rounded-[28px] md:grid-cols-2">
      <div className={flip ? '' : 'md:order-2'}>
        <img src={src} alt={alt} className="block aspect-[4/3] size-full object-cover md:aspect-auto md:min-h-[520px]" />
      </div>
      <Copy card={card} />
    </article>
  )
}

function DarkCard({ card, mark, Icon }: { card: FeatureCard; mark: 'face' | 'icon'; Icon?: LucideIcon }) {
  return (
    <article className="grid overflow-hidden rounded-[28px] md:grid-cols-[1.1fr_1fr]">
      <div className="relative flex min-h-[420px] flex-col justify-end overflow-hidden bg-bark p-8 text-cream md:p-12">
        <span className="absolute -top-28 -right-16 size-96 rounded-full border border-cream/12" />
        <span className="absolute -bottom-32 left-8 size-64 rounded-full bg-clay" />
        {mark === 'face' ? (
          <OledFace size={120} mood="sleepy" className="absolute top-10 right-12" />
        ) : (
          Icon && (
            <span className="absolute top-10 left-10 grid size-14 place-items-center rounded-full bg-cream text-bark">
              <Icon size={24} fill="currentColor" />
            </span>
          )
        )}
        <div className="relative">
          <p className="text-xs font-bold tracking-wider text-peach">{card.tagline}</p>
          <h3 className="display mt-4 text-4xl md:text-5xl">{card.headline}</h3>
        </div>
      </div>
      <div className="flex flex-col justify-center bg-sand p-8 md:p-14">
        <p className="leading-relaxed text-umber">{card.body}</p>
        <div className="mt-7">
          <ArrowLink to={`/muru/${card.linkTo}`}>{card.linkLabel}</ArrowLink>
        </div>
      </div>
    </article>
  )
}

export function FeatureCards() {
  const { tagline, headline, cards, photoAlts } = useLanguage().t.features
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <Reveal>
          <p className="eyebrow text-clay">{tagline}</p>
          <h2 className="display mt-5 text-5xl md:text-7xl">{headline}</h2>
        </Reveal>
        <div className="mt-14 flex flex-col gap-6">
          <Reveal>
            <PhotoCard card={cards[0]} src={welcome} alt={photoAlts.welcome} />
          </Reveal>
          <Reveal>
            <DarkCard card={cards[1]} mark="face" />
          </Reveal>
          <Reveal>
            <PhotoCard card={cards[2]} src={reading} alt={photoAlts.reading} />
          </Reveal>
          <Reveal>
            <PhotoCard card={cards[3]} src={remote} alt={photoAlts.remote} flip />
          </Reveal>
          <Reveal>
            <DarkCard card={cards[4]} mark="icon" Icon={Heart} />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
