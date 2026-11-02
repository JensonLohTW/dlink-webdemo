import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { en } from './content/en'
import { ja } from './content/ja'
import type { Lang, MuruContent } from './content/types'
import { zh } from './content/zh'
import { LanguageContext } from './language-context'

const dictionaries: Record<Lang, MuruContent> = { zh, en, ja }
const storageKey = 'muru-lang'

function readStoredLang(): Lang {
  try {
    const stored = localStorage.getItem(storageKey)
    if (stored === 'zh' || stored === 'en' || stored === 'ja') return stored
  } catch {
    // Storage can be blocked; the default language still works.
  }
  return 'zh'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readStoredLang)
  const t = dictionaries[lang]

  useEffect(() => {
    document.documentElement.lang = t.meta.htmlLang
    document.title = t.meta.title
    return () => {
      document.documentElement.lang = 'zh-Hant'
    }
  }, [t])

  const value = useMemo(
    () => ({
      lang,
      t,
      setLang: (next: Lang) => {
        setLangState(next)
        try {
          localStorage.setItem(storageKey, next)
        } catch {
          // Language simply won't persist across reloads.
        }
      },
    }),
    [lang, t],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
