import { useState, type FormEvent } from 'react'

const fieldClass =
  'mt-2 w-full rounded-xl border border-lagoon/20 bg-paper px-4 py-3 text-base text-lagoon outline-none transition-colors focus:border-signal aria-[invalid=true]:border-[#b4432f]'

interface Errors {
  name?: string
  email?: string
  message?: string
}

function validate(data: FormData): Errors {
  const errors: Errors = {}
  if (!String(data.get('name')).trim()) errors.name = '請輸入姓名。'
  if (!/^\S+@\S+\.\S+$/.test(String(data.get('email')).trim())) errors.email = '請輸入有效的 Email，例如 name@company.com。'
  if (!String(data.get('message')).trim()) errors.message = '請告訴我們您想洽詢的內容。'
  return errors
}

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const found = validate(new FormData(event.currentTarget))
    setErrors(found)
    if (Object.keys(found).length === 0) setSent(true)
  }

  if (sent) {
    return (
      <div role="status" className="mt-8 rounded-2xl bg-mist p-6">
        <p className="font-corp text-xl font-bold">訊息已送出</p>
        <p className="mt-2 text-sm text-slate">展示版本不會實際傳送資料。</p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-4 cursor-pointer text-sm font-bold text-signal underline"
        >
          再填一則
        </button>
      </div>
    )
  }

  return (
    <form noValidate onSubmit={onSubmit} className="mt-8 flex flex-col gap-5">
      <label className="block text-sm font-semibold">
        Name
        <input name="name" autoComplete="name" className={fieldClass} aria-invalid={Boolean(errors.name)} />
        {errors.name && <span className="mt-1 block text-sm font-normal text-[#b4432f]">{errors.name}</span>}
      </label>
      <label className="block text-sm font-semibold">
        Email
        <input
          name="email"
          type="email"
          autoComplete="email"
          className={fieldClass}
          aria-invalid={Boolean(errors.email)}
        />
        {errors.email && <span className="mt-1 block text-sm font-normal text-[#b4432f]">{errors.email}</span>}
      </label>
      <label className="block text-sm font-semibold">
        Message
        <textarea name="message" rows={4} className={fieldClass} aria-invalid={Boolean(errors.message)} />
        {errors.message && <span className="mt-1 block text-sm font-normal text-[#b4432f]">{errors.message}</span>}
      </label>
      <button
        type="submit"
        className="mt-1 cursor-pointer self-start rounded-full bg-lagoon px-8 py-3.5 font-corp text-sm font-bold text-paper transition-colors hover:bg-signal"
      >
        Submit
      </button>
    </form>
  )
}
