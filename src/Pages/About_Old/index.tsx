/* eslint-disable jsx-a11y/img-redundant-alt */
import { Container } from "@mui/material";
import { HeaderComponent, Content, TextAbout, ImageContainer } from "./style";
import PortraitPhoto from "../../images/portrait.png";
import Pulse from "react-reveal/Pulse";
import Fade from "react-reveal/Fade";

export const About = (...props: any[]) => {
  const language = props[0].getLanguage;

  return language === "pt-BR" ? (
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
                desenvolvedor Front-end PL pelo{" "}
                <a
                  href="https://www.farmaciasapp.com.br/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Farmácias App
                </a>
                , localizado em Salvador/Brasil.
                <br />
                <br />
                Tenho uma paixão pela construção de páginas web, e o entusiasmo
                enorme em poder fazer com que toda a experiência de usuário seja
                visualmente linda e fiel a proposta.
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
          <Fade right>
            <ImageContainer>
              <img src={PortraitPhoto} alt="photo" />
            </ImageContainer>
          </Fade>
        </Content>
      </HeaderComponent>
    </Container>
  ) : (
    <Container maxWidth="md">
      <HeaderComponent>
        <Fade>
          <Pulse>
            <h5>About me</h5>
          </Pulse>
        </Fade>
        <Content>
          <Fade left cascade>
            <TextAbout>
              <p>
                Hi, I'm Adriel Gama. Nice to meet you. I'm a developer Front-end
                PL on{" "}
                <a
                  href="https://www.farmaciasapp.com.br/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Farmácias App
                </a>
                , located in Salvador/Brazil.
                <br />
                <br />
                I have a passion for building web pages, and a huge enthusiasm
                in being able to make the entire user experience visually
                beautiful and faithful to the proposal.
                <br />
                <br />
                I'm organized, I like challenges and problem solving, I have a
                high attention to detail. Interested in the entire Frontend
                spectrum and working on ambitious projects with extremely
                positive people. I'm quietly confident, naturally curious and
                perpetually working to improve my skills.
              </p>
            </TextAbout>
          </Fade>
          <Fade right>
            <ImageContainer>
              <img src={PortraitPhoto} alt="photo" />
            </ImageContainer>
          </Fade>
        </Content>
      </HeaderComponent>
    </Container>
  );
};
