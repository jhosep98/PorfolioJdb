import React, { useState } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

import { useTranslations } from "../translations";
import image1 from "./img/laptop.jpeg";
import ContactModal from './ContactModal';

const Article = styled.article`
  margin-top: 2%;
  color: white;
  background-color: #000;
  box-shadow: 0px 0px 70px rgba(102, 102, 102, 0.2);
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const H2 = styled.h2`
  margin-bottom: 0.625rem;
  font-size: 1.5625em;
  padding: 10px;
  text-decoration:underline;
`;
const P = styled.p`
  font-size: 1em;
  color: #868b8d;
  margin-bottom: 0.625rem;
  padding: 10px;
`;
const BoxAboutMe = styled.p`
  font-size: 1.1em;
  line-height: 1.5625rem;
  font-weight: 300;
  margin-bottom: 1.25rem;
  color: #868b8d;
  padding: 10px;
`;
const ContenedorThumbnail = styled.div`
  min-height: 100%;
  width: 50%;
  position: relative;
  background-image: url(${image1});
  background-size: cover;
  display:flex;
  justify-content:center;
  align-items:center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ContactButton = styled(Button)`
  position: absolute;
  font-size:1.3em !important;

`
const Destacado = () => {
  const { translate: t } = useTranslations()
  const [contactModalOpen, setContactModalOpen] = useState(false)

  return (
    <Article>
      <div>
        <div>
          <H2>{t('aboutMe.about')}</H2>
          <P>
            <time>{t('aboutMe.date')}</time>
          </P>
        </div>
        <BoxAboutMe dangerouslySetInnerHTML={{__html: t('aboutMe.desc')}} />
      </div>
      <ContenedorThumbnail>
        <ContactButton onClick={_ => setContactModalOpen(true)} variant="outlined" color="secondary" disableElevation>{t('aboutMe.contact')}</ContactButton>
      </ContenedorThumbnail>
      <ContactModal open={contactModalOpen} onClose={_ => setContactModalOpen(false)}/>
    </Article>
  );
};

export default Destacado;
