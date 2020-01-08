import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

import Board from './img/img-1.png';
import Generate from './img/img-2.png';
import  Weather from './img/img-3.png';

import { useTranslations } from '../translations'

const CustomButton = styled(Button)`
  ${'' /* background-color: #1CAB4E !important; */}
`

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
const ContenedorThumbnail = styled.div`
  width: 50%;
`;
const ContenedorTexto = styled.div`
  padding: 20px;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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

const Proyects = () => {
  const { translate: t } = useTranslations()

  return (
  <>
    <Main>
      <Article>
        <ContenedorThumbnail>
          <a href="#">
            <img src={Board} alt="" />
          </a>
        </ContenedorThumbnail>
        <ContenedorTexto>
          <div>
            <Titulo>
              <a href="#">{t('proyects_section.proyects[0].title')}</a>
            </Titulo>
            <Fecha>
              <time>{t('proyects_section.proyects[0].date')}</time>
            </Fecha>
          </div>
          <Parrafo>
           {t('proyects_section.proyects[0].desc')}
          </Parrafo>
          <CustomButton
            href="https://jhosep98.github.io/jdbsPaint-con-Reactjs/"
            target="blank"
            variant="outlined" 
            color="secondary"
          >
            {t('proyects_section.seeMore')}
          </CustomButton>
        </ContenedorTexto>
      </Article>

      <Article>
        <ContenedorThumbnail>
          <a href="#">
            <img src={Generate} alt="" />
          </a>
        </ContenedorThumbnail>
        <ContenedorTexto>
          <div>
            <Titulo>
              <a href="#">{t('proyects_section.proyects[1].title')}</a>
            </Titulo>
            <Fecha>
              <time>{t('proyects_section.proyects[1].date')}</time>
            </Fecha>
          </div>
          <Parrafo>
          {t('proyects_section.proyects[1].desc')}
          </Parrafo>
          <CustomButton
            href="https://jhosep98.github.io/Carrusel/"
            target="blank"
            variant="outlined"
            color="secondary"
          >
            {t('proyects_section.seeMore')}
          </CustomButton>
        </ContenedorTexto>
      </Article>

      <Article3>
        <ContenedorThumbnail>
          <a href="#">
            <img src={Weather} alt="" />
          </a>
        </ContenedorThumbnail>
        <ContenedorTexto>
          <div>
            <Titulo>
              <a href="#">{t('proyects_section.proyects[2].title')}</a>
            </Titulo>
            <Fecha>
              <time>{t('proyects_section.proyects[2].date')}</time>
            </Fecha>
          </div>
          <Parrafo>
          {t('proyects_section.proyects[2].desc')}
          </Parrafo>
          <CustomButton
            href="https://jhosep98.github.io/Weather-con-Reactjs/build/index"
            target="blank"
            variant="outlined" color="secondary"
          >
            {t('proyects_section.seeMore')}
          </CustomButton>
        </ContenedorTexto>
      </Article3>
    </Main>
  </>
  )
}

export default Proyects;
