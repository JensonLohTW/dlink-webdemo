import { Check, MonitorSmartphone, ShieldCheck, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { Reveal } from '../../../shared/Reveal'
import type { Plan } from '../content/types'
import { useLanguage } from '../language-context'
import { ArrowLink } from './ArrowLink'

export type PlanId = 'basic' | 'plus'

function PlanCard({
  plan,
  accent,
  selected,
  onSelect,
}: {
  plan: Plan
  accent: boolean
  selected: boolean
  onSelect: () => void
}) {
  const surface = accent ? 'border-transparent bg-apricot' : 'border-bark/12 bg-cream'
  const ring = selected ? 'ring-2 ring-bark ring-offset-4 ring-offset-sand' : ''
  return (
    <article className={`flex flex-col rounded-[28px] border p-8 transition-shadow md:p-10 ${surface} ${ring}`}>
      <p
        className={`eyebrow w-fit rounded-full px-3 py-1.5 !text-[0.625rem] ${accent ? 'bg-bark text-cream' : 'bg-sand text-umber'}`}
      >
        {plan.tagline}
      </p>
      <h3 className="display mt-5 text-5xl">{plan.title}</h3>
      <p className={`mt-3 text-sm ${accent ? 'text-bark' : 'text-umber'}`}>{plan.subtitle}</p>
      <ul className="mt-7 flex flex-1 list-none flex-col gap-3 p-0">
        {plan.checklist.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed">
            <Check size={16} className={`mt-0.5 shrink-0 ${accent ? 'text-bark' : 'text-clay'}`} />
            {item}
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

export function PlanCards() {
  const { app } = useLanguage().t
  const [planId, setPlanId] = useState<PlanId>('plus')
  return (
    <div className="grid gap-5 md:grid-cols-2">
      <PlanCard plan={app.basic} accent={false} selected={planId === 'basic'} onSelect={() => setPlanId('basic')} />
      <PlanCard plan={app.plus} accent selected={planId === 'plus'} onSelect={() => setPlanId('plus')} />
    </div>
  )
}

const featureIcons = [MonitorSmartphone, ShieldCheck, Sparkles]

export function AppFeatureGrid() {
  const { features } = useLanguage().t.app
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {features.map((feature, index) => {
        const Icon = featureIcons[index]
        return (
          <article key={feature.title} className="rounded-3xl border border-bark/10 bg-cream p-7">
            <Icon size={22} className="text-clay" strokeWidth={1.75} />
            <h3 className="display mt-4 text-[1.5rem]">{feature.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-umber">{feature.body}</p>
          </article>
        )
      })}
    </div>
  )
}

export function AppSection() {
  const { app: copy } = useLanguage().t
  return (
    <section className="bg-sand">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <Reveal className="grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-end">
          <div>
            <p className="eyebrow text-clay">{copy.tagline}</p>
            <h2 className="display mt-5 text-5xl md:text-7xl">{copy.headline}</h2>
          </div>
          <p className="leading-relaxed text-umber">{copy.body}</p>
        </Reveal>
        <Reveal className="mt-14">
          <PlanCards />
        </Reveal>
        <Reveal className="mt-8">
          <AppFeatureGrid />
        </Reveal>
        <div className="mt-10">
          <ArrowLink to="/muru/the-app">{copy.more}</ArrowLink>
        </div>
      </div>
    </section>
  )
}
