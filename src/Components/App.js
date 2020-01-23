import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import Header from './Header'
import AboutMe from './AboutMe'
import Proyects from './Proyects'
import Aside from './Aside'
import Footer from './Footer'

import { TranslationProvider } from '../translations'

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 300;
    font-size: 16px;
  }

  a {
    text-decoration: none;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const Div = styled.div`
  width: 90%;
  max-width: 75em;
  margin: 1.25em auto;
`

const Box = styled.div`
  width:100%;
  display:flex;
  @media(max-width: 400px){
    display:flex;
    flex-direction:column;
  }
`

const App = () => {
  return (
    <TranslationProvider defaultLanguage='es'>
      <Div>
        <GlobalStyle />
        <Header />
        <AboutMe />
        <Box>
          <Proyects />
          <Aside />
        </Box>
        <Footer />
      </Div>

    </TranslationProvider>
  )
}

export default App
