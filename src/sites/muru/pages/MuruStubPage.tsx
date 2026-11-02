import { PageIntro } from '../components/PageIntro'
import { ArrowLink } from '../components/ArrowLink'
import { useLanguage } from '../language-context'

type StubKey = 'careGuide' | 'privacy' | 'terms' | 'accessibility'

export function MuruStubPage({ page }: { page: StubKey }) {
  const { stub } = useLanguage().t
  return (
    <>
      <PageIntro tagline="MuRu" headline={stub[page]} body={stub.body} />
      <section className="bg-cream px-6 py-16 text-center">
        <ArrowLink to="/muru">{stub.back}</ArrowLink>
      </section>
    </>
  )
}
