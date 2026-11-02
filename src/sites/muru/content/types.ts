export type Lang = 'zh' | 'en' | 'ja'

export interface Heading {
  tagline: string
  headline: string
  body: string
}

export type LinkTarget = 'technology' | 'the-app'

export interface FeatureCard extends Heading {
  linkLabel: string
  linkTo: LinkTarget
}

export interface StageSummary extends Heading {}

export interface StageDetail {
  name: string
  milestone: string
  motion: string
  response: string
}

export interface Plan {
  tagline: string
  title: string
  subtitle: string
  checklist: string[]
  choose: string
  selected: string
}

export interface PlanDetail {
  title: string
  note: string
  items: { title: string; body: string }[]
}

export interface MuruContent {
  meta: { title: string; htmlLang: string }
  nav: {
    logoSuffix: string
    growing: string
    life: string
    technology: string
    app: string
    cta: string
    menu: string
    languageLabel: string
  }
  hero: {
    kicker: string
    /** The headline in three parts; the middle one takes the accent treatment. */
    headline: [string, string, string]
    body: string
    primary: string
    secondary: string
    corner: string
  }
  philosophy: {
    tagline: string
    headline: string
    body: string
    quote: string
    attribution: string
  }
  growing: {
    tagline: string
    headline: string
    body: string
    stages: StageSummary[]
    photoCaption: string
    photoAlt: string
    more: string
  }
  features: {
    tagline: string
    headline: string
    cards: FeatureCard[]
    photoAlts: { welcome: string; reading: string; remote: string }
  }
  technology: {
    tagline: string
    headline: string
    body: string
    sense: Heading
    glow: Heading
    connect: Heading
    listen: Heading
    more: string
  }
  specs: {
    headline: string
    label: string
    columns: [string, string, string]
    rows: [string, string, string][]
  }
  app: {
    tagline: string
    headline: string
    body: string
    basic: Plan
    plus: Plan
    features: { title: string; body: string }[]
    more: string
  }
  faq: {
    tagline: string
    headline: string
    items: { q: string; a: string }[]
  }
  footer: {
    description: string
    explore: string
    support: string
    follow: string
    appLink: string
    careGuide: string
    faqLink: string
    copyright: string
    privacy: string
    terms: string
    accessibility: string
  }
  pages: {
    growing: {
      headline: string
      body: string
      motionLabel: string
      responseLabel: string
      stages: StageDetail[]
      mechanicsTitle: string
      mechanics: string
    }
    life: {
      headline: string
      features: { title: string; body: string }[]
    }
    technology: {
      headline: string
      features: { title: string; body: string }[]
    }
    app: {
      headline: string
      basic: PlanDetail
      plus: PlanDetail
    }
  }
  stub: {
    careGuide: string
    privacy: string
    terms: string
    accessibility: string
    body: string
    back: string
  }
}
