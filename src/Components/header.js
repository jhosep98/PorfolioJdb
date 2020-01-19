import React from 'react'
import styled from 'styled-components'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

import { useTranslations } from '../translations'

const Div = styled.header`
  grid-area: header;
  padding: 1.25em;
  background: #fff;
  box-shadow: 0px 0px 4.375em rgba(102, 102, 102, 0.2);
  a {
    padding: 0.625em;
    color: #000;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 400;
    width: 100%;
    text-align: center;
    transition: 0.2s ease all;
    font-size: 1em;
  }
 a:hover {
    background: #000;
    color: #fff;
  }
`
const InicialesLogo = styled.p`
  padding: 0.3125em;
  border: 2px solid #000;
  font-size: 1em;
  margin-bottom: 0.9375em;
  width:10%;
`

const Logo = styled.div`
  margin-bottom: 1.25em;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 3px;
  display:flex;
  justify-content:space-between;
`
const H1 = styled.h1`
font-size: 30px;
text-align:center;
text-transform: uppercase;
font-family:IBrushstroke, fantasy;
`
const Nav = styled.nav`
   border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    display: flex;
    justify-content: space-between;
`

const Header = () => {
  const { currentLanguage, setCurrentLanguage } = useTranslations()
  return (
    <Div>
      <Logo>
        <InicialesLogo>JDB</InicialesLogo>
        <Select value={currentLanguage} onChange={ev => setCurrentLanguage(ev.target.value)}>
          <MenuItem value='es'>Español</MenuItem>
          <MenuItem value='en'>English</MenuItem>
        </Select>
      </Logo>
      <H1>Jhosep Davila Bustamante</H1>
      <Nav className="menu">
        <a href="#">Inicio</a>
      </Nav>
    </Div>
  )
}

export default Header
