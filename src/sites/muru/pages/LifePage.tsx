import { PawPrint } from 'lucide-react'
import type { ReactNode } from 'react'
import reading from '../../../assets/photos/reading.jpg'
import remote from '../../../assets/photos/remote.jpg'
import welcome from '../../../assets/photos/welcome.jpg'
import { Reveal } from '../../../shared/Reveal'
import { OledFace } from '../components/OledFace'
import { PageIntro } from '../components/PageIntro'
import { useLanguage } from '../language-context'

function DarkPanel({ children }: { children: ReactNode }) {
  return (
    <div className="relative grid aspect-[4/3] place-items-center overflow-hidden rounded-[28px] bg-bark">
      <span className="absolute -top-20 -right-10 size-72 rounded-full border border-cream/12" />
      <span className="absolute -bottom-28 -left-6 size-56 rounded-full bg-clay" />
      <span className="relative">{children}</span>
    </div>
  )
}

export function LifePage() {
  const { nav, pages, features } = useLanguage().t
  const { photoAlts } = features
  const visuals: ReactNode[] = [
    <img key="welcome" src={welcome} alt={photoAlts.welcome} className="block aspect-[4/3] w-full rounded-[28px] object-cover object-[50%_40%]" />,
    <DarkPanel key="boundaries">
      <OledFace size={180} mood="sleepy" />
    </DarkPanel>,
    <img key="reading" src={reading} alt={photoAlts.reading} className="block aspect-[4/3] w-full rounded-[28px] object-cover object-[50%_30%]" />,
    <img key="remote" src={remote} alt={photoAlts.remote} className="block aspect-[4/3] w-full rounded-[28px] object-cover" />,
    <DarkPanel key="pets">
      <PawPrint size={96} className="text-peach" strokeWidth={1.25} aria-hidden="true" />
    </DarkPanel>,
  ]

  return (
    <>
      <PageIntro tagline={nav.life} headline={pages.life.headline} />
      <section className="bg-cream">
        <div className="mx-auto flex max-w-6xl flex-col gap-20 px-6 py-20 md:gap-28 md:px-10 md:py-28">
          {pages.life.features.map((feature, index) => (
            <Reveal key={feature.title} className="grid items-center gap-8 md:grid-cols-2 md:gap-16">
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>{visuals[index]}</div>
              <div>
                <p className="font-serif text-lg text-clay">{`0${index + 1}`}</p>
                <h2 className="display mt-3 text-3xl md:text-[2.75rem]">{feature.title}</h2>
                <p className="mt-5 leading-relaxed text-umber">{feature.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
