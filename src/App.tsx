/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import { ColorPallete } from "./themes/theme";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { Header } from "./Pages/Header";
import { About } from "./Pages/About";
import { Skills } from "./Pages/Skills";
import { BsDownload } from "react-icons/bs";

import BrazilFlag from "./images/brazil.png";
import UsaFlag from "./images/usa.png";

const Languages = styled.div`
  cursor: pointer;
  opacity: 0.5;

  > img {
    max-width: 26px;
    margin-left: 1vh;
  }

  :hover {
    opacity: 1;
  }
`;

const ContainerLanguages = styled.div`
  position: fixed;
  top: 1.5vh;
  right: 2vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 1vh;

  z-index: 999;
`;

const FabComponent = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;

  position: fixed;
  bottom: 30px;
  right: -150px;
  background-color: ${ColorPallete.secondary};
  border-radius: 10px 0 0 10px;
  padding: 10px;
  color: ${ColorPallete.main};
  z-index: 999;

  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.18);
  -webkit-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.18);
  -moz-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.18);

  transition: 450ms;
  cursor: pointer;

  svg {
    margin-right: 10px;
  }

  :hover {
    right: 0;
    animation: none;
  }

  animation: shake 3.72s ease infinite;

  @keyframes shake {
    0% {
      transform: translate(0, 0);
    }
    1.78571% {
      transform: translate(5px, 0);
    }
    3.57143% {
      transform: translate(0, 0);
    }
    5.35714% {
      transform: translate(5px, 0);
    }
    7.14286% {
      transform: translate(0, 0);
    }
    8.92857% {
      transform: translate(5px, 0);
    }
    10.71429% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(0, 0);
    }
  }
`;

function App() {
  const [language, setLanguage] = useState("pt-BR");

  return (
    <div className="App">
      <a
        href={
          language === "pt-BR"
            ? "/public/files/ResumePT.pdf"
            : "/public/files/ResumeEN.pdf"
        }
        target="_blank"
        rel="noreferrer"
      >
        <FabComponent>
          <BsDownload />
          <p>Download Resume CV</p>
        </FabComponent>
      </a>
      <ContainerLanguages>
        <Languages onClick={() => setLanguage("pt-BR")}>
          <img src={BrazilFlag} alt="pt-BR" />
        </Languages>
        <Languages onClick={() => setLanguage("en-US")}>
          <img src={UsaFlag} alt="en-US" />
        </Languages>
      </ContainerLanguages>

      <Fade bottom>
        <div style={{ backgroundColor: `${ColorPallete.main}` }}>
          <Header getLanguage={language} />
        </div>
      </Fade>
      <Fade bottom>
        <div
          style={{ backgroundColor: `${ColorPallete.secondary}` }}
          id="about"
        >
          <About getLanguage={language} />
        </div>
      </Fade>
      <Fade bottom>
        <div style={{ backgroundColor: `${ColorPallete.main}`, zIndex: 999 }}>
          <Skills getLanguage={language} />
        </div>
      </Fade>
    </div>
  );
}

export default App;
