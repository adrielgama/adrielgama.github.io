import { Container } from "@mui/material";
import { HeaderComponent, ChevronIcon } from "./style";
import { HiChevronDoubleDown } from "react-icons/hi";
import Pulse from "react-reveal/Pulse";
import Fade from "react-reveal/Fade";

export const Header = (...props: any[]) => {
  const language = props[0].getLanguage;

  return language === "pt-BR" ? (
    <Container maxWidth="md">
      <HeaderComponent>
        <Pulse>
          <Fade left cascade>
            <a
              href={
                language === "pt-BR"
                  ? "/files/ResumePT.pdf"
                  : "/files/ResumeEN.pdf"
              }
              target="_blank"
              rel="noreferrer"
            >
              <p>
                Olá, me chamo <b>Adriel Gama</b> e sou dev Front-end
              </p>
            </a>
          </Fade>
        </Pulse>
      </HeaderComponent>
      <ChevronIcon>
        <a href="#about">
          <HiChevronDoubleDown />
        </a>
      </ChevronIcon>
    </Container>
  ) : (
    <Container maxWidth="md">
      <HeaderComponent>
        <Pulse>
          <Fade left cascade>
            <a
              href={
                language === "pt-BR"
                  ? "/files/ResumePT.pdf"
                  : "/files/ResumeEN.pdf"
              }
              target="_blank"
              rel="noreferrer"
            >
              <p>
                Hi, my name is <b>Adriel Gama</b> and I'm Front-end dev
              </p>
            </a>
          </Fade>
        </Pulse>
      </HeaderComponent>
      <ChevronIcon>
        <a href="#about">
          <HiChevronDoubleDown />
        </a>
      </ChevronIcon>
    </Container>
  );
};
