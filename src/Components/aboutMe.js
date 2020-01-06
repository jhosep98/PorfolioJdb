import React from "react";
import styled from "styled-components";

import { useTranslations } from "../translations";
import image1 from "./img/img-02.jpg";

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
`;
const P = styled.p`
  font-size: 1em;
  color: #868b8d;
  margin-bottom: 0.625rem;
  padding: 10px;
`;
const Box_aboutMe = styled.p`
  font-size: 1.1em;
  line-height: 1.5625rem;
  font-weight: 300;
  margin-bottom: 1.25rem;
  color: #868b8d;
  padding: 10px;
`;
const Contenedor_thumbnail = styled.div`
  min-height: 100%;
  width: 50%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Destacado = () => {
  const { translate: t } = useTranslations()

  return (
    <Article>
      <div>
        <div>
          <H2>Sobre mi:</H2>
          <P>
            <time>Enero 04, 2020</time>
          </P>
        </div>
        <Box_aboutMe>
          *Edad: 21 <br />
          *Nacionalidad: Peruana <br />
          *Correo: jhosepdb149@gmail.com <br />
          *Experiencia: Freelancer en www.Freelancer.com <br />
          *Radica: Argentina - CABA
        </Box_aboutMe>
      </div>
      <Contenedor_thumbnail>
        <img src={image1} />
      </Contenedor_thumbnail>
    </Article>
  );
};

export default Destacado;
