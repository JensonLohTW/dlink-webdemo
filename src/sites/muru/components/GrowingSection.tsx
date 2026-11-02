import family from '../../../assets/photos/family.jpg'
import { Reveal } from '../../../shared/Reveal'
import { useLanguage } from '../language-context'
import { ArrowLink } from './ArrowLink'

const offsets = ['md:mt-0', 'md:mt-10', 'md:mt-20']

export function GrowingSection() {
  const { growing: copy } = useLanguage().t
  return (
    <section className="relative overflow-hidden bg-linen">
      <div className="absolute -right-48 -bottom-20 size-[640px] rounded-full bg-sand" />
      <div className="relative mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <Reveal className="grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-end">
          <div>
            <p className="eyebrow text-clay">{copy.tagline}</p>
            <h2 className="display mt-5 text-5xl md:text-7xl">{copy.headline}</h2>
          </div>
          <p className="leading-relaxed text-umber">{copy.body}</p>
        </Reveal>

        <ol className="mt-16 grid list-none gap-5 p-0 md:grid-cols-3">
          {copy.stages.map((stage, index) => (
            <li key={stage.tagline} className={offsets[index]}>
              <Reveal delay={index * 120}>
                <div className="mb-6 flex items-center gap-4">
                  <span className="grid size-16 place-items-center rounded-full border border-bark/10 bg-cream font-serif text-xl text-clay">
                    {`0${index + 1}`}
                  </span>
                  {index < copy.stages.length - 1 && <span className="hidden h-px flex-1 bg-bark/20 md:block" />}
                </div>
                <div className="rounded-3xl border border-bark/8 bg-cream/90 p-7 shadow-[0_18px_40px_-28px_rgb(51_36_27/0.35)]">
                  <p className="eyebrow text-clay">{stage.tagline}</p>
                  <h3 className="display mt-4 text-[1.75rem]">{stage.headline}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-umber">{stage.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal className="relative mt-20 overflow-hidden rounded-[28px] shadow-[0_30px_60px_-34px_rgb(51_36_27/0.55)]">
          <img src={family} alt={copy.photoAlt} className="block aspect-[16/9] w-full object-cover md:aspect-[2/1]" />
          <p className="display absolute bottom-5 left-5 m-0 max-w-[15em] rounded-2xl bg-bark/80 px-5 py-4 text-xl text-cream backdrop-blur-sm md:bottom-8 md:left-8 md:text-2xl">
            {copy.photoCaption}
          </p>
        </Reveal>

        <div className="mt-10">
          <ArrowLink to="/muru/growing-together">{copy.more}</ArrowLink>
        </div>
      </div>
    </section>
  )
}
