import { useEffect, useRef, useState } from 'react'
import { Reveal } from '../../../shared/Reveal'
import { OledFace, type Mood } from '../components/OledFace'
import { PageIntro } from '../components/PageIntro'
import { useLanguage } from '../language-context'

const moods: Mood[] = ['curious', 'happy', 'breathe']

export function GrowingPage() {
  const { nav, pages } = useLanguage().t
  const copy = pages.growing
  const [active, setActive] = useState(0)
  const stageRefs = useRef<(HTMLLIElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          setActive(stageRefs.current.indexOf(entry.target as HTMLLIElement))
        }
      },
      { rootMargin: '-45% 0px -45% 0px' },
    )
    stageRefs.current.forEach((node) => node && observer.observe(node))
    return () => observer.disconnect()
  }, [])

  const stage = copy.stages[active]

  return (
    <>
      <PageIntro tagline={nav.growing} headline={copy.headline} body={copy.body} />

      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[0.8fr_1fr] md:gap-20 md:px-10 md:py-28">
          {/* Follows the reader down the timeline, so MuRu visibly matures. */}
          <aside className="sticky top-18 z-10 -mx-6 self-start bg-cream/95 px-6 py-4 backdrop-blur-sm md:top-32 md:mx-0 md:bg-transparent md:p-0">
            <div className="flex items-center gap-6 md:flex-col md:items-start md:gap-8">
              <OledFace size={232} mood={moods[active]} className="hidden md:block" />
              <OledFace size={72} mood={moods[active]} className="md:hidden" />
              <div aria-live="polite">
                <p className="display text-2xl md:text-4xl">{stage.name}</p>
                <p className="mt-1 text-sm text-umber md:mt-3">{stage.milestone}</p>
              </div>
            </div>
            <div className="mt-4 flex gap-2 md:mt-8" aria-hidden="true">
              {copy.stages.map((item, index) => (
                <span
                  key={item.name}
                  className={`h-1 flex-1 rounded-full transition-colors duration-700 ${index <= active ? 'bg-clay' : 'bg-bark/12'}`}
                />
              ))}
            </div>
          </aside>

          <ol className="relative m-0 flex list-none flex-col gap-24 border-l border-bark/15 p-0 pb-[20vh] pl-8 md:pl-12">
            {copy.stages.map((item, index) => (
              <li
                key={item.name}
                ref={(node) => {
                  stageRefs.current[index] = node
                }}
                className="relative"
              >
                <span
                  className={`absolute top-1 -left-[calc(2rem+7px)] size-3.5 rounded-full border-2 border-cream transition-colors duration-500 md:-left-[calc(3rem+7px)] ${index <= active ? 'bg-clay' : 'bg-bark/25'}`}
                />
                <p className="font-serif text-lg text-clay">{`0${index + 1}`}</p>
                <h2 className="display mt-2 text-4xl md:text-5xl">{item.name}</h2>
                <p className="mt-2 text-sm font-bold text-umber">{item.milestone}</p>
                <h3 className="eyebrow mt-8 text-clay">{copy.motionLabel}</h3>
                <p className="mt-2 leading-relaxed text-umber">{item.motion}</p>
                <h3 className="eyebrow mt-6 text-clay">{copy.responseLabel}</h3>
                <p className="mt-2 leading-relaxed text-umber">{item.response}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-sand">
        <Reveal className="mx-auto max-w-3xl px-6 py-20 text-center md:py-24">
          <h2 className="display text-4xl">{copy.mechanicsTitle}</h2>
          <p className="mt-5 leading-relaxed text-umber">{copy.mechanics}</p>
        </Reveal>
      </section>
    </>
  )
}
