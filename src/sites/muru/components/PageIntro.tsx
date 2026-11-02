interface PageIntroProps {
  tagline: string
  headline: string
  body?: string
  tone?: 'cream' | 'dark'
}

export function PageIntro({ tagline, headline, body, tone = 'cream' }: PageIntroProps) {
  const dark = tone === 'dark'
  return (
    <header className={dark ? 'bg-bark text-cream' : 'bg-sand text-bark'}>
      <div className="mx-auto max-w-6xl px-6 pt-36 pb-16 md:px-10 md:pt-44 md:pb-20">
        <p className={`eyebrow load-in ${dark ? 'text-peach' : 'text-clay'}`}>{tagline}</p>
        <h1 className="display load-in mt-5 max-w-4xl text-5xl md:text-7xl">{headline}</h1>
        {body && (
          <p className={`load-in mt-7 max-w-2xl text-lg leading-relaxed ${dark ? 'text-cream/75' : 'text-umber'}`}>
            {body}
          </p>
        )}
      </div>
    </header>
  )
}
