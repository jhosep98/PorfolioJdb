import React from 'react'
import styled from 'styled-components'

import { useTranslations } from '../translations'
import image1 from './img/laptop.jpeg'
import ContactModalButton from './ContactModalButton'

const Article = styled.div`
  margin-top: 2%;
  color: white;
  background-color: #000;
  box-shadow: 0px 0px 70px rgba(102, 102, 102, 0.2);
  display: flex;
  width: 100%;
`
const Div = styled.div`
  width:50%;
`
const H2 = styled.h2`
  margin-bottom: 0.625rem;
  font-size: 1.5625em;
  padding: 10px;
  @media(max-width: 400px){
    font-size:1em;
  }
`
const P = styled.p`
  font-size: 1em;
  color: #868b8d;
  margin-bottom: 0.625rem;
  padding: 10px;
  @media(max-width: 400px){
    font-size:0.8em;
  }
`
const BoxAboutMe = styled.p`
  font-size: 1.1em;
  line-height: 1.5625rem;
  font-weight: 300;
  margin-bottom: 1.25rem;
  color: #868b8d;
  padding: 10px;
  @media(max-width: 400px){
    font-size:0.8em;
  }
`
const ContenedorThumbnail = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url(${image1});
  background-size: cover;
  display:flex;
  justify-content:center;
  align-items:center;
`

const AboutMe = () => {
  const { translate: t } = useTranslations()

  return (
    <Article>
      <Div>
        <div>
          <H2>{t('aboutMe.about')}</H2>
          <P>
            <time>{t('aboutMe.date')}</time>
          </P>
        </div>
        <BoxAboutMe dangerouslySetInnerHTML={{ __html: t('aboutMe.desc') }} />
      </Div>
    <Div>
      <ContenedorThumbnail>
        <ContactModalButton />
      </ContenedorThumbnail>
    </Div>
    </Article>
  )
}

export default AboutMe
