import React from "react";
import styled from "styled-components";
import foto from "./img/foto.jpg";

const Aside = styled.aside`
  width:40%;
  margin-top:2%;
  padding: 5em 25px;
  text-align: center;
  min-height: 100px;
  grid-area: aside;
  background: #000;
  color: #868b8d;
  box-shadow: 0px 0px 70px rgba(102, 102, 102, 0.2);
  a {
	padding: 1.5625rem; 
	color: #fff;
	background-color: #000;
	display: block;
	font-size: 1em;
	text-transform: uppercase;
}
a:hover {
	background: #262626;
}
`;
const Img = styled.img`
   border-radius: 100%;
	height: 10em; 
	width: 10em; 
	margin-bottom: 1.5625em; 
`;
const Div = styled.div`
   margin-bottom: 1.5625em; 
	font-size: 1.1em; 
	line-height: 1.5625em; 
`;
const Menu = styled.nav`
   width: 100%;
	display: inline-block;
	background: #ccc;
   font-size: 0.9em; 
`;

const Asider = () => (
  <Aside>
    <div>
      <Img src={foto} alt="" />
      <Div>
        <p>¡Hola!</p>
        <p>
          Soy un desarrollador de software que actualmente se enfoca en aprender
          el desarrollo web fullstack.Comenzando con tecnologías básicas como
          HTML y CSS, hasta herramientas y conceptos más complejos y modernos
          como NodeJS, React, y control de versiones.
        </p>
      </Div>
    </div>
    <Menu>
      <a
        href="https://www.linkedin.com/in/jhosep-davila-7a3b53190/"
        target="blank"
      >
        Linkedin
      </a>
      <a href="https://github.com/jhosep98" target="blank">
        GitHub
      </a>
    </Menu>
  </Aside>
);

export default Asider;
