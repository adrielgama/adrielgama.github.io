import { Container, Box, Paper } from "@mui/material";
import styled from "styled-components";
import { Contact } from "../Contact/index";
import { ColorPallete } from "../../themes/theme";
import { HeaderComponent } from "./style";
import { HiOutlineCode } from "react-icons/hi";
import { ImPencil2 } from "react-icons/im";
import Pulse from "react-reveal/Pulse";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

const BoxStyled = styled(Box)`
  justify-content: center;
  position: relative;
  top: 10vh;
  z-index: 999;
`;
const PaperStyled = styled(Paper)`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  * {
    font-style: normal;
    text-align: center;
  }

  > div {
    color: ${ColorPallete.secondary};
    font-size: 2.5rem;
    transition: 150ms;
    :hover {
      color: ${ColorPallete.alter};
    }
  }

  > h2 {
    font-family: Quantico;
    font-weight: normal;
    font-size: 2rem;
  }

  > h4 {
    font-family: Quantico;
    font-weight: normal;
    font-size: 1.5rem;
    color: ${ColorPallete.alter};
    padding: 30px 0;
  }

  > ul {
    li {
      font-family: Roboto;
      font-weight: 500;
      font-size: 1rem;
      line-height: 26px;
      color: ${ColorPallete.textGrey};
    }
  }
`;

export const Skills = () => {
  const devSkill = [
    "HTML5",
    "CSS3",
    "Styled Components",
    "Bootstrap",
    "Javascript",
    "Typescript",
    "ReactJS",
    "Git",
    "Bitbucket",
    "Github",
    "Storybook",
    "Material-UI",
    "NPM/Yarn",
    "SQL",
    "Jira",
  ];
  const designSkill = [
    "UI",
    "UX",
    "Web",
    "Mobile",
    "Apps",
    "Figma",
    "Photoshop",
    "Photography",
  ];

  return (
    <>
      <Container maxWidth="md">
        <HeaderComponent>
          <Pulse>
            <Fade left cascade>
              <h1>Habilidades</h1>
            </Fade>
          </Pulse>
        </HeaderComponent>

        {/* CARD CONTENT  */}
        <Pulse  cascade>
          <BoxStyled
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: 350,
              },
            }}
          >
            <PaperStyled elevation={3}>
              <div>
                <HiOutlineCode />
              </div>
              <h2>Front-end</h2>
              <h4>Tools:</h4>
              <ul>
                {devSkill.map((data, index) => {
                  return (
                    <Slide bottom cascade>
                      <li key={index}>{data}</li>
                    </Slide>
                  );
                })}
              </ul>
            </PaperStyled>

            <PaperStyled elevation={3}>
              <div>
                <ImPencil2 />
              </div>
              <h2>Designer</h2>
              <h4>Tools:</h4>
              <ul>
                {designSkill.map((data, index) => {
                  return (
                    <Slide bottom cascade>
                      <li key={index}>{data}</li>
                    </Slide>
                  );
                })}
              </ul>
            </PaperStyled>
          </BoxStyled>
        </Pulse>
      </Container>
      <Fade bottom>
        <div
          style={{ backgroundColor: `${ColorPallete.secondary}`, zIndex: 1 }}
        >
          <Contact />
        </div>
      </Fade>
    </>
  );
};
