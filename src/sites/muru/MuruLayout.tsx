import { ArrowRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { SocialIcons } from '../../shared/SocialIcons'
import type { Lang } from './content/types'
import { useLanguage } from './language-context'

const languages: { id: Lang; label: string }[] = [
  { id: 'zh', label: '繁中' },
  { id: 'en', label: 'EN' },
  { id: 'ja', label: '日' },
]

function Wordmark({ light, suffix }: { light: boolean; suffix: string }) {
  return (
    <Link to="/muru" className="flex items-baseline gap-2 no-underline" aria-label="MuRu">
      <span className={`font-ui text-2xl font-extrabold tracking-tight ${light ? 'text-cream' : 'text-bark'}`}>
        MuRu
      </span>
      <span className="size-1.5 self-center rounded-full bg-apricot" />
      <span className={`eyebrow hidden !text-[0.625rem] sm:inline ${light ? 'text-cream/70' : 'text-umber'}`}>
        {suffix}
      </span>
    </Link>
  )
}

function LanguageSwitch({ light }: { light: boolean }) {
  const { lang, setLang, t } = useLanguage()
  return (
    <div role="group" aria-label={t.nav.languageLabel} className="flex items-center gap-0.5 text-xs font-bold">
      {languages.map(({ id, label }) => {
        const active = id === lang
        const idle = light ? 'text-cream/75 hover:text-cream' : 'text-umber hover:text-bark'
        const on = light ? 'bg-cream/20 text-cream' : 'bg-bark/10 text-bark'
        return (
          <button
            key={id}
            type="button"
            aria-pressed={active}
            onClick={() => setLang(id)}
            className={`cursor-pointer rounded-full px-2.5 py-1.5 transition-colors ${active ? on : idle}`}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}

function Header() {
  const { t } = useLanguage()
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [pathname])

  const links = [
    { to: '/muru/growing-together', label: t.nav.growing },
    { to: '/muru/life-with-muru', label: t.nav.life },
    { to: '/muru/technology', label: t.nav.technology },
    { to: '/muru/the-app', label: t.nav.app },
  ]
  const onHero = pathname === '/muru' || pathname === '/muru/technology'
  const light = onHero && !scrolled && !menuOpen

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        light ? 'bg-transparent' : 'bg-cream/92 shadow-[0_1px_0_rgb(51_36_27/0.08)] backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-6 md:px-10">
        <Wordmark light={light} suffix={t.nav.logoSuffix} />
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-[0.8125rem] font-bold no-underline transition-colors ${
                  light ? 'text-cream hover:text-peach' : isActive ? 'text-clay' : 'text-bark hover:text-clay'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitch light={light} />
          <Link
            to="/muru/the-app"
            className={`group hidden items-center gap-2 rounded-full px-5 py-2.5 text-[0.8125rem] font-bold no-underline transition-colors sm:inline-flex ${
              light ? 'bg-cream text-bark hover:bg-peach' : 'bg-bark text-peach hover:bg-bark-soft'
            }`}
          >
            {t.nav.cta}
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
          <button
            type="button"
            aria-label={t.nav.menu}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className={`cursor-pointer p-1 lg:hidden ${light ? 'text-cream' : 'text-bark'}`}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-bark/10 bg-cream px-6 pt-3 pb-6 lg:hidden">
          {links.map(({ to, label }) => (
            <Link key={to} to={to} className="py-3 text-lg font-bold text-bark no-underline">
              {label}
            </Link>
          ))}
          <Link
            to="/muru/the-app"
            className="mt-3 rounded-full bg-bark px-5 py-3.5 text-center text-sm font-bold text-peach no-underline"
          >
            {t.nav.cta}
          </Link>
        </nav>
      )}
    </header>
  )
}

function Footer() {
  const { t } = useLanguage()
  const { footer, nav } = t
  const column = (title: string, items: { to: string; label: string }[]) => (
    <div>
      <h2 className="eyebrow text-cream">{title}</h2>
      <ul className="mt-5 flex list-none flex-col gap-3 p-0">
        {items.map(({ to, label }) => (
          <li key={label}>
            <Link to={to} className="text-sm text-cream/75 no-underline hover:text-peach">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <footer className="bg-bark font-ui text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pt-16 pb-10 md:grid-cols-[1.6fr_1fr_1fr_1fr] md:px-10">
        <div>
          <p className="flex items-baseline gap-2">
            <span className="text-2xl font-extrabold">MuRu</span>
            <span className="size-1.5 self-center rounded-full bg-apricot" />
            <span className="eyebrow !text-[0.625rem] text-cream/70">{nav.logoSuffix}</span>
          </p>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/75">{footer.description}</p>
        </div>
        {column(footer.explore, [
          { to: '/muru/growing-together', label: nav.growing },
          { to: '/muru/life-with-muru', label: nav.life },
          { to: '/muru/technology', label: nav.technology },
        ])}
        {column(footer.support, [
          { to: '/muru/the-app', label: footer.appLink },
          { to: '/muru/care-guide', label: footer.careGuide },
          { to: '/muru#faq', label: footer.faqLink },
        ])}
        <div>
          <h2 className="eyebrow text-cream">{footer.follow}</h2>
          <SocialIcons className="mt-5 text-cream" />
          <Link to="/robotics" className="mt-4 inline-block text-sm text-cream/75 no-underline hover:text-peach">
            D-Link Robotics
          </Link>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 border-t border-cream/15 px-6 py-6 text-xs text-cream/60 md:px-10">
        <p>{footer.copyright}</p>
        <p className="flex gap-2">
          <Link to="/muru/privacy" className="text-inherit no-underline hover:text-peach">
            {footer.privacy}
          </Link>
          ·
          <Link to="/muru/terms" className="text-inherit no-underline hover:text-peach">
            {footer.terms}
          </Link>
          ·
          <Link to="/muru/accessibility" className="text-inherit no-underline hover:text-peach">
            {footer.accessibility}
          </Link>
        </p>
      </div>
    </footer>
  )
}

export function MuruLayout() {
  return (
    <div className="bg-cream font-ui text-bark">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
