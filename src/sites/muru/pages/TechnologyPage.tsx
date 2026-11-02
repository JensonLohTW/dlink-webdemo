import { Fingerprint, Gamepad2 } from 'lucide-react'
import { Reveal } from '../../../shared/Reveal'
import { OledFace } from '../components/OledFace'
import { PageIntro } from '../components/PageIntro'
import { SpecTable } from '../components/TechnologySection'
import { useLanguage } from '../language-context'

export function TechnologyPage() {
  const { nav, pages } = useLanguage().t
  const copy = pages.technology
  const visuals = [
    <Fingerprint key="touch" size={72} strokeWidth={1} className="text-peach" aria-hidden="true" />,
    <OledFace key="glow" size={120} mood="breathe" />,
    <Gamepad2 key="remote" size={72} strokeWidth={1} className="text-peach" aria-hidden="true" />,
  ]

  return (
    <>
      <PageIntro tagline={nav.technology} headline={copy.headline} tone="dark" />
      <section className="bg-bark text-cream">
        <div className="mx-auto max-w-6xl px-6 pt-4 pb-24 md:px-10 md:pb-32">
          <div className="grid gap-4 md:grid-cols-3">
            {copy.features.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 120} className="h-full">
                <article className="flex h-full flex-col rounded-3xl border border-cream/10 bg-gradient-to-br from-[#4f3528] to-[#3f2b21] p-7">
                  <div className="grid h-44 place-items-center">{visuals[index]}</div>
                  <h2 className="display text-[1.75rem]">{feature.title}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-cream/75">{feature.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <SpecTable />
        </div>
      </section>
    </>
  )
}
