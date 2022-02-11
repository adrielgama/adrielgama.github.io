import { Container } from "@mui/material";
import {
  HeaderComponent,
  ChevronIcon,
  Languages,
  ContainerLanguages,
} from "./style";
import { HiChevronDoubleDown } from "react-icons/hi";
import BrazilFlag from "../../images/brazil.png";
import UsaFlag from "../../images/usa.png";
import Pulse from "react-reveal/Pulse";
import Fade from "react-reveal/Fade";

export const Header = () => {
  return (
    <Container maxWidth="md">
      <ContainerLanguages>
        <Languages>
          <img src={BrazilFlag} alt="pt-BR" />
        </Languages>
        <Languages>
          <img src={UsaFlag} alt="en-US" />
        </Languages>
      </ContainerLanguages>
      <HeaderComponent>
        <Pulse>
          <Fade left cascade>
            <p>
              Olá, me chamo <b>Adriel Gama</b> e sou dev Front-end
            </p>
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
