/* eslint-disable jsx-a11y/img-redundant-alt */
import { Container } from "@mui/material";
import { HeaderComponent, Content, TextAbout, ImageContainer } from "./style";
import PortraitPhoto from "../../images/portrait.png";
import Pulse from "react-reveal/Pulse";
import Fade from "react-reveal/Fade";
import Roll from "react-reveal/Roll";

export const About = () => {
  return (
    <Container maxWidth="md">
      <HeaderComponent>
        <Fade>
          <Pulse>
            <h5>Sobre mim</h5>
          </Pulse>
        </Fade>
        <Content>
          <Fade left cascade>
            <TextAbout>
              <p>
                Olá, eu sou o Adriel Gama. Prazer em conhecê-lo. Sou
                desenvolvedor
                <br />
                <br />
                Front-end, localizado em Salvador/Brasil. Tenho uma paixão pela
                construção de páginas web, e o entusiasmo enorme em poder fazer
                com que toda a experiência de usuário seja visualmente linda e
                fiel a proposta.
                <br />
                <br />
                Sou organizado, gosto de desafios e solucionar problemas, tenho
                uma alta atenção aos detalhes. Interessado em todo o espectro de
                Front-end e trabalhando em projetos ambiciosos com pessoas
                extremamente positivas. Estou tranquilamente confiante,
                naturalmente curioso e trabalhando perpetuamente para melhorar
                minhas habilidades.
              </p>
            </TextAbout>
          </Fade>
          <Roll>
            <ImageContainer>
              <img src={PortraitPhoto} alt="photo" />
            </ImageContainer>
          </Roll>
        </Content>
      </HeaderComponent>
    </Container>
  );
};
