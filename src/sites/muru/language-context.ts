import { createContext, useContext } from 'react'
import type { Lang, MuruContent } from './content/types'

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: MuruContent
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

export function useLanguage() {
  const value = useContext(LanguageContext)
  if (!value) throw new Error('useLanguage must be used inside LanguageProvider')
  return value
}
