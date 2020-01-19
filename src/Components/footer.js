import React from 'react'
import styled from 'styled-components'

const Root = styled.footer`
  margin-top:2%;
  background: #fff;
  font-size: 1.1em;
  padding: 1.5625rem;
  text-align: center;
  box-shadow: 0px 0px 70px rgba(102, 102, 102, 0.2);
`

const Footer = () => (
  <Root>
    <p>Copyright © 2020 Jhosep Davila Bustamante</p>
  </Root>
)

export default Footer
