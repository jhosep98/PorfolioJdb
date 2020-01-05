import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

import Board from './img/img-1.png';
import Generate from './img/img-2.png';
import  Weather from './img/img-3.png';


const Article = styled.article`
  display: flex;
  background: #fff;
  box-shadow: 0px 0px 70px rgba(102, 102, 102, 0.2);
  margin-bottom:3%;
  a {
    color: #000;
  }
`;
const Main = styled.main`
  margin-top:2%;
  margin-right:2%;
  width:60%;
  height:auto;
`;
const Contenedor_thumbnail = styled.div`
  width: 50%;
`;
const Contenedor_texto = styled.div`
  padding: 20px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;
const Titulo = styled.h2`
  margin-bottom: 0.625rem;
  font-size: 1.3em;
`;
const Fecha = styled.p`
  font-size: 1em;
  color: #868b8d;
  margin-bottom: 0.625rem;
`;
const Parrafo = styled.p`
  font-size: 1em;
  line-height: 1.5625rem;
  font-weight: 300;
  color: #868b8d;
`;
const Article3 = styled.article`
  display: flex;
  background: #fff;
  box-shadow: 0px 0px 70px rgba(102, 102, 102, 0.2);
  margin-bottom:0%;
  a {
    color: #000;
  }
`;

const Proyects = () => (
  <>
    <Main>
      <Article>
        <Contenedor_thumbnail>
          <a href="#">
            <img src={Board} alt="" />
          </a>
        </Contenedor_thumbnail>
        <Contenedor_texto>
          <div>
            <Titulo>
              <a href="#">Tablero de dibujo</a>
            </Titulo>
            <Fecha>
              <time>Octubre 08, 2019</time>
            </Fecha>
          </div>
          <Parrafo>
            Este es un tablero interactivo donde puedes dibujar. Cuenta con
            varias herramientas y configuraciones. Creé esta aplicación
            siguiendo un tutorial de JS, luego la convertí en React como
            ejercicio.
          </Parrafo>
          <Button
            href="https://jhosep98.github.io/jdbsPaint-con-Reactjs/"
            target="blank"
          >
            Ver
          </Button>
        </Contenedor_texto>
      </Article>

      <Article>
        <Contenedor_thumbnail>
          <a href="#">
            <img src={Generate} alt="" />
          </a>
        </Contenedor_thumbnail>
        <Contenedor_texto>
          <div>
            <Titulo>
              <a href="#">Generador de efectos de imagen</a>
            </Titulo>
            <Fecha>
              <time>Noviembre 15, 2019</time>
            </Fecha>
          </div>
          <Parrafo>
          Generador de efectos de imagen para su imagen. El resultado final es una porción de HTML que puede incrustar en su sitio web.
          </Parrafo>
          <Button
            href="https://jhosep98.github.io/Carrusel/"
            target="blank"
          >
            Ver
          </Button>
        </Contenedor_texto>
      </Article>

      <Article3>
        <Contenedor_thumbnail>
          <a href="#">
            <img src={Weather} alt="" />
          </a>
        </Contenedor_thumbnail>
        <Contenedor_texto>
          <div>
            <Titulo>
              <a href="#">Aplicación de información meteorológica</a>
            </Titulo>
            <Fecha>
              <time>Septiembre 10, 2019</time>
            </Fecha>
          </div>
          <Parrafo>
          Un sitio web simple que muestra información sobre el clima del país y la ciudad que usted quiera.
          </Parrafo>
          <Button
            href="https://jhosep98.github.io/Weather-con-Reactjs/build/index"
            target="blank"
          >
            Ver
          </Button>
        </Contenedor_texto>
      </Article3>
    </Main>
  </>
);

export default Proyects;
