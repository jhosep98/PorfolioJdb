import React from "react";
import styled from "styled-components";

import Button from "@material-ui/core/Button";
import gitHub from "./img/github.png";

const Root = styled.footer`
  margin-top: 2%;
  background: #fff;
  font-size: 1.1em;
  padding: 1.5625rem;
  text-align: center;
  box-shadow: 0px 0px 70px rgba(102, 102, 102, 0.2);
  display: flex;
  justify-content: flex-end;
  & > p {
    margin: 2%;
  }
  @media(max-width: 400px){
    font-size: 0.9em;
  }
`;
const CustomButton = styled(Button)`
  height: 50px;
  color: black;
`;
const Div = styled.div`
  width: 50px;
  height: 50px;
`;
const Img = styled.img`
  background-size: cover;
  width: 100%;
  height: 100%;
  @media(max-width: 400px){
    width: 40px;
    height: 40px;
  }
`;
const Footer = () => {
  return (
    <Root>
      <p>Copyright © 2020 Jhosep Davila Bustamante</p>
      <Div>
        <a
          href="https://github.com/jhosep98/PorfolioJdb/tree/master"
          target="blank"
        >
          <Img src={gitHub} />
        </a>
      </Div>
    </Root>
  );
};
export default Footer;
