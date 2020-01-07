import React, { createContext, useState, useContext } from 'react'
import get from 'lodash.get'

import es from './es.yml'
import en from './en.yml'

const TRANSLATIONS  = { es, en }

const Context = createContext()

const translate = identifier => {
  const { currentLanguage } = useContext(Context)
  const translations = TRANSLATIONS[currentLanguage]

  if (!translations) {
    throw `Missing translations for language ${currentLanguage}`
  }

  const translation = get(translations, identifier)

  if (!translation) {
    throw `Translation not found for language '${currentLanguage}': ${identifier}`
  }

  return translation
}

const TranslationProvider = ({ defaultLanguage, children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(defaultLanguage)

  return (
    <Context.Provider value={{ currentLanguage, setCurrentLanguage, translate }}>
      {children}
    </Context.Provider>
  )
}

const useTranslations = _ => useContext(Context)

export { TranslationProvider, useTranslations }