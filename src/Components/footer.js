import React from 'react';
import styled from 'styled-components';

const Fotter = styled.footer`
   margin-top:2%;
   background: #fff;
	font-size: 1.1em; 
	grid-area: footer;
	padding: 1.5625rem; 
	text-align: center;
	box-shadow: 0px 0px 70px rgba(102, 102, 102, 0.2);
`;

const Footer = () => (
   <Fotter>
				<p>Copyright © 2020 Jhosep Davila Bustamante</p>
	</Fotter>
)

export default Footer;