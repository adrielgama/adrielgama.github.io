import React, { useState } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { Home } from "./Pages/Home";

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

function App() {
  const [language, setLanguage] = useState("pt-BR");

  return (
    <div className="App">
      <ContainerLanguages>
        <Languages onClick={() => setLanguage("pt-BR")}>
          <img src={BrazilFlag} alt="pt-BR" />
        </Languages>
        <Languages onClick={() => setLanguage("en-US")}>
          <img src={UsaFlag} alt="en-US" />
        </Languages>
      </ContainerLanguages>

      <Fade bottom>
        <Home getLanguage={language} />
      </Fade>
    </div>
  );
}

export default App;
