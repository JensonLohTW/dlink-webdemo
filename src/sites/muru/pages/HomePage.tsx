import { AppSection } from '../components/AppSection'
import { Faq } from '../components/Faq'
import { FeatureCards } from '../components/FeatureCards'
import { GrowingSection } from '../components/GrowingSection'
import { Hero } from '../components/Hero'
import { Philosophy } from '../components/Philosophy'
import { TechnologySection } from '../components/TechnologySection'

export function HomePage() {
  return (
    <>
      <Hero />
      <Philosophy />
      <GrowingSection />
      <FeatureCards />
      <TechnologySection />
      <AppSection />
      <Faq />
    </>
  )
}
