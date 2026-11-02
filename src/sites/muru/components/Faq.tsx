import { Minus, Plus } from 'lucide-react'
import { useId, useState } from 'react'
import { Reveal } from '../../../shared/Reveal'
import { useLanguage } from '../language-context'

function FaqItem({ q, a, defaultOpen }: { q: string; a: string; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  const panelId = useId()
  return (
    <li className="border-b border-bark/12">
      <h3 className="m-0">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
          className="flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left text-base font-bold text-bark"
        >
          {q}
          {open ? (
            <Minus size={18} className="shrink-0 text-clay" />
          ) : (
            <Plus size={18} className="shrink-0 text-clay" />
          )}
        </button>
      </h3>
      <div
        id={panelId}
        className={`grid transition-[grid-template-rows] duration-500 ease-soft ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden" inert={!open}>
          <p className="max-w-3xl pb-7 leading-relaxed text-umber">{a}</p>
        </div>
      </div>
    </li>
  )
}

export function Faq() {
  const { faq: copy } = useLanguage().t
  return (
    <section id="faq" className="scroll-mt-16 bg-linen">
      <div className="mx-auto max-w-5xl px-6 py-24 md:px-10 md:py-32">
        <Reveal>
          <p className="eyebrow text-clay">{copy.tagline}</p>
          <h2 className="display mt-5 text-5xl md:text-7xl">{copy.headline}</h2>
        </Reveal>
        <ul className="mt-12 list-none border-t border-bark/12 p-0">
          {copy.items.map((item, index) => (
            <FaqItem key={item.q} q={item.q} a={item.a} defaultOpen={index === 0} />
          ))}
        </ul>
      </div>
    </section>
  )
}
