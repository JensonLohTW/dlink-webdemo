import { ArrowDownRight, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import hero from '../../../assets/photos/hero.jpg'
import { useLanguage } from '../language-context'

export function Hero() {
  const { t, lang } = useLanguage()
  const { hero: copy, features } = t
  const [before, accent, after] = copy.headline

  return (
    <section className="relative flex flex-col overflow-hidden bg-bark text-cream md:h-[min(100svh,880px)] md:min-h-[640px] md:justify-center">
      <img
        src={hero}
        alt={features.photoAlts.welcome}
        className="relative block aspect-square w-full object-cover object-[60%_center] md:absolute md:inset-0 md:aspect-auto md:size-full md:object-[50%_center]"
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 aspect-square bg-[linear-gradient(to_bottom,rgb(51_36_27/0.5),transparent_30%)] md:inset-0 md:aspect-auto md:bg-[linear-gradient(100deg,rgb(51_36_27/0.74),rgb(51_36_27/0.42)_40%,transparent_58%),linear-gradient(to_bottom,rgb(51_36_27/0.42),transparent_18%)]" />
      <div className="relative mx-auto w-full max-w-7xl px-6 pt-9 pb-12 md:px-10 md:py-0">
        <p className="eyebrow load-in text-peach" style={{ '--reveal-delay': '100ms' } as React.CSSProperties}>
          {copy.kicker}
        </p>
        <h1
          className={`display load-in mt-5 max-w-[11em] text-[2.625rem] whitespace-pre-line sm:text-6xl ${lang === 'en' ? 'lg:max-w-[9em] lg:text-[5.5rem]' : 'lg:text-[4.25rem]'}`}
          style={{ '--reveal-delay': '250ms' } as React.CSSProperties}
        >
          {before}
          <em className={`text-peach ${lang === 'en' ? 'italic' : 'not-italic'}`}>{accent}</em>
          {after}
        </h1>
        <p
          className="load-in mt-6 max-w-md text-base leading-relaxed text-cream/90"
          style={{ '--reveal-delay': '450ms' } as React.CSSProperties}
        >
          {copy.body}
        </p>
        <div
          className="load-in mt-8 flex flex-wrap items-center gap-6"
          style={{ '--reveal-delay': '600ms' } as React.CSSProperties}
        >
          <a
            href="#philosophy"
            className="group inline-flex items-center gap-2 rounded-full bg-clay px-6 py-3.5 text-sm font-bold text-cream no-underline shadow-lg shadow-bark/25 transition-colors hover:bg-apricot"
          >
            {copy.primary}
            <ArrowDownRight size={16} className="transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
          <Link
            to="/muru/life-with-muru"
            className="group inline-flex items-center gap-2 text-sm font-bold text-cream no-underline"
          >
            {copy.secondary}
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
      <p className="eyebrow absolute right-10 bottom-7 hidden items-center gap-3 !text-[0.625rem] text-cream lg:flex">
        <span className="h-px w-8 bg-cream/70" />
        {copy.corner}
      </p>
    </section>
  )
}
