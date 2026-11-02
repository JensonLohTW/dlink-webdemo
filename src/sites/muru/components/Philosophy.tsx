import { Reveal } from '../../../shared/Reveal'
import { useLanguage } from '../language-context'

export function Philosophy() {
  const { philosophy: copy } = useLanguage().t
  return (
    <section id="philosophy" className="scroll-mt-16 bg-cream">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-2 md:gap-20 md:px-10 md:py-36">
        <Reveal>
          <p className="eyebrow text-clay">{copy.tagline}</p>
          <h2 className="display mt-5 text-5xl md:text-7xl">{copy.headline}</h2>
          <p className="mt-8 max-w-md leading-relaxed text-umber">{copy.body}</p>
        </Reveal>
        <Reveal delay={150} className="self-center">
          <blockquote className="m-0">
            <span aria-hidden="true" className="font-serif text-7xl leading-none text-peach">
              “
            </span>
            <p className="display -mt-6 text-3xl md:text-[2.5rem] md:leading-tight">{copy.quote}</p>
            <footer className="eyebrow mt-6 text-umber">{copy.attribution}</footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  )
}
