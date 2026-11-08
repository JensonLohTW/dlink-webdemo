import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { SocialIcons } from '../../shared/SocialIcons'
import { nav } from './content'

function Header() {
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

  const light = pathname === '/robotics' && !scrolled && !menuOpen
  const close = () => setMenuOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        light ? 'bg-transparent' : 'bg-paper/92 shadow-[0_1px_0_rgb(14_52_56/0.1)] backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6 md:px-10">
        <Link
          to="/robotics"
          className={`font-corp text-xl font-bold tracking-tight no-underline ${light ? 'text-paper' : 'text-lagoon'}`}
        >
          D-Link <span className={light ? 'font-normal' : 'font-normal text-signal'}>Robotics</span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map(({ id, zh }) => (
            <Link
              key={id}
              to={`/robotics#${id}`}
              className={`font-corp-body text-[0.9375rem] font-semibold tracking-wide no-underline transition-colors ${
                light ? 'text-paper' : 'text-lagoon hover:text-signal'
              }`}
            >
              {zh}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            to="/muru"
            className="group hidden items-center gap-1.5 rounded-full bg-sun px-5 py-2.5 font-corp text-sm font-bold text-lagoon no-underline transition-colors hover:bg-paper sm:inline-flex"
          >
            商店／探索 MuRu
            <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
          </Link>
          <button
            type="button"
            aria-label="選單"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className={`cursor-pointer p-1 lg:hidden ${light ? 'text-paper' : 'text-lagoon'}`}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-lagoon/10 bg-paper px-6 pt-3 pb-6 lg:hidden">
          {nav.map(({ id, zh }) => (
            <Link
              key={id}
              to={`/robotics#${id}`}
              onClick={close}
              className="py-3 font-corp-body text-lg font-semibold text-lagoon no-underline"
            >
              {zh}
            </Link>
          ))}
          <Link
            to="/muru"
            className="mt-3 rounded-full bg-sun px-5 py-3.5 text-center font-corp text-sm font-bold text-lagoon no-underline"
          >
            商店／探索 MuRu
          </Link>
        </nav>
      )}
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-lagoon font-corp-body text-paper">
      <div className="mx-auto flex max-w-7xl flex-wrap items-start justify-between gap-10 px-6 pt-14 pb-10 md:px-10">
        <div>
          <p className="font-corp text-xl font-bold">
            D-Link <span className="font-normal">Robotics</span>
          </p>
          <p className="mt-4 text-sm text-paper/75">© 2026 D-Link Robotics. Imagined with care.</p>
          <p className="mt-1 text-sm text-paper/75">© 2026 D-Link Robotics. 傾心打造。</p>
        </div>
        <div className="flex flex-col items-start gap-4 md:items-end">
          <SocialIcons className="text-paper" />
          <a
            href="https://www.dlink.com/tw/zh"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm font-semibold text-paper no-underline hover:text-sun"
          >
            D-Link Corporation
            <ArrowUpRight size={14} />
          </a>
          <p className="flex gap-3 text-sm text-paper/75">
            <Link to="/robotics/privacy" className="text-inherit no-underline hover:text-sun">
              Privacy Policy 隱私權政策
            </Link>
            <span aria-hidden="true">｜</span>
            <Link to="/robotics/terms" className="text-inherit no-underline hover:text-sun">
              Terms of Service 服務條款
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export function RoboticsLayout() {
  useEffect(() => {
    document.title = 'D-Link Robotics｜Technology that cares.'
  }, [])

  return (
    <div className="corp bg-paper font-corp-body text-lagoon">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
