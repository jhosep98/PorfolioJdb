import React from './node_modules/react'
import styled from './node_modules/styled-components'
import foto from './img/foto.jpg'

import { useTranslations } from '../translations'

const Root = styled.aside`
  width: 40%;
  margin-top: 2%;
  padding: 5em 25px;
  text-align: center;
  min-height: 100px;
  grid-area: aside;
  background: #000;
  color: #868b8d;
  box-shadow: 0px 0px 70px rgba(102, 102, 102, 0.2);
`

const A = styled.a`
  padding: 1.5625rem;
  color: #fff;
  background-color: #000;
  font-size: 1em;
  text-transform: uppercase;

  &:hover {
    background: #262626;
  }
`

const Img = styled.img`
  border-radius: 100%;
  height: 10em;
  width: 10em;
  margin-bottom: 1.5625em;
`
const Div = styled.div`
  margin-bottom: 1.5625em;
  font-size: 1.1em;
  line-height: 1.5625em;
`
const Menu = styled.nav`
  width: 100%;
  display: inline-block;
  background: #ccc;
  font-size: 0.9em;
`

const Aside = () => {
  const { translate: t } = useTranslations()

  return (
    <Root>
      <div>
        <Img src={foto} alt="" />
        <Div>
          <p> { t('aside.saludo') }  </p>
          <p>{t('aside.parrafo')}</p>
        </Div>
      </div>
      <Menu>
        <A
          href="https://www.linkedin.com/in/jhosep-davila-7a3b53190/"
          target="blank"
        >
          Linkedin
        </A>

        <A href="https://github.com/jhosep98" target="blank">
          GitHub
        </A>
      </Menu>
    </Root>
  )
}

export default Aside
