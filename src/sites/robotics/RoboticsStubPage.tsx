import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { stubs } from './content'

export function RoboticsStubPage({ page }: { page: keyof typeof stubs }) {
  return (
    <section className="mx-auto min-h-[60vh] max-w-3xl px-6 pt-36 pb-24 md:pt-44">
      <h1 className="text-4xl font-bold md:text-6xl">{stubs[page]}</h1>
      <p className="mt-6 text-lg text-slate">此頁面將於正式上線時提供。</p>
      <Link
        to="/robotics#support"
        className="mt-10 inline-flex items-center gap-1.5 font-corp text-sm font-bold text-signal no-underline"
      >
        <ArrowLeft size={15} />
        Here for you
      </Link>
    </section>
  )
}
