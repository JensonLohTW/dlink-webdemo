import { Check } from 'lucide-react'
import { useState } from 'react'
import { Reveal } from '../../../shared/Reveal'
import { AppFeatureGrid, type PlanId } from '../components/AppSection'
import { PageIntro } from '../components/PageIntro'
import type { Plan, PlanDetail } from '../content/types'
import { useLanguage } from '../language-context'

function PlanColumn({
  detail,
  plan,
  selected,
  onSelect,
}: {
  detail: PlanDetail
  plan: Plan
  selected: boolean
  onSelect: () => void
}) {
  return (
    <article
      className={`flex flex-col rounded-[28px] border p-8 transition-colors md:p-10 ${
        selected ? 'border-bark bg-cream' : 'border-bark/12 bg-cream/60'
      }`}
    >
      <h2 className="display text-4xl">{detail.title}</h2>
      <p className="mt-2 text-sm font-bold text-clay">{detail.note}</p>
      <ul className="mt-8 flex flex-1 list-none flex-col gap-5 p-0">
        {detail.items.map((item) => (
          <li key={item.title} className="flex gap-3">
            <Check size={18} className="mt-0.5 shrink-0 text-clay" />
            <span>
              <strong className="block text-sm">{item.title}</strong>
              <span className="mt-1 block text-sm leading-relaxed text-umber">{item.body}</span>
            </span>
          </li>
        ))}
      </ul>
      <button
        type="button"
        aria-pressed={selected}
        onClick={onSelect}
        className={`mt-9 w-full cursor-pointer rounded-full border px-6 py-3.5 text-sm font-bold transition-colors ${
          selected ? 'border-bark bg-bark text-cream' : 'border-bark/30 bg-transparent text-bark hover:bg-bark/5'
        }`}
      >
        {selected ? plan.selected : plan.choose}
      </button>
    </article>
  )
}

export function PlansPage() {
  const { nav, pages, app } = useLanguage().t
  const [planId, setPlanId] = useState<PlanId>('plus')
  return (
    <>
      <PageIntro tagline={nav.app} headline={pages.app.headline} body={app.body} />
      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-6 pb-24 md:px-10 md:pb-32">
          <Reveal className="grid gap-5 md:grid-cols-2">
            <PlanColumn
              detail={pages.app.basic}
              plan={app.basic}
              selected={planId === 'basic'}
              onSelect={() => setPlanId('basic')}
            />
            <PlanColumn
              detail={pages.app.plus}
              plan={app.plus}
              selected={planId === 'plus'}
              onSelect={() => setPlanId('plus')}
            />
          </Reveal>
          <Reveal className="mt-8">
            <AppFeatureGrid />
          </Reveal>
        </div>
      </section>
    </>
  )
}
