import React, { createContext, useState, useContext } from 'react'
import PropTypes from 'prop-types'
import get from 'lodash.get'

import es from './es.yml'
import en from './en.yml'

const TRANSLATIONS = { es, en }

const Context = createContext()

const translate = identifier => {
  const { currentLanguage } = useContext(Context)
  const translations = TRANSLATIONS[currentLanguage]

  if (!translations) {
    throw `Missing translations for language ${currentLanguage}` // eslint-disable-line no-throw-literal
  }

  const translation = get(translations, identifier)

  if (!translation) {
    throw `Translation not found for language '${currentLanguage}': ${identifier}` // eslint-disable-line no-throw-literal
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

TranslationProvider.propTypes = {
  defaultLanguage: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}

const useTranslations = () => useContext(Context)

export { TranslationProvider, useTranslations }
