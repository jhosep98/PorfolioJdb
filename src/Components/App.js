import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import Header from "./header";
import AboutMe from "./aboutMe";
import Proyects from "./proyects";
import Aside from "./aside";
import Footer from "./footer";


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
`;
const Div = styled.div`
  width: 90%;
  max-width: 75em;
  margin: 1.25em auto;
`;

const Box = styled.div`
  width:100%;
  display:flex;
`;

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
  );
};

export default App;
