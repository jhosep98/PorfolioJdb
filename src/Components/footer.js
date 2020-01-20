import React from 'react'
import styled from 'styled-components'
import Button from "@material-ui/core/Button"

const Root = styled.footer`
  margin-top:2%;
  background: #fff;
  font-size: 1.1em;
  padding: 1.5625rem;
  text-align: center;
  box-shadow: 0px 0px 70px rgba(102, 102, 102, 0.2);
  display:flex;
  justify-content:flex-end;
  & > *{
    margin:2%;
  }
`
const CustomButton = styled(Button)`
  height:50px;
  color:black;
`

const Footer = () => (
  <Root>
    <p>Copyright © 2020 Jhosep Davila Bustamante</p>
    <CustomButton 
    variant="outlined" 
    color="secondary"
    href="https://github.com/jhosep98/PorfolioJdb/tree/master"
    target="blank"
    >Codigo Fuente</CustomButton>
  </Root>
)

export default Footer
