import { Container, Box, Paper, Tooltip } from "@mui/material";
import styled from "styled-components";
import { ColorPallete } from "../../themes/theme";
import { HeaderComponent, FooterComponent } from "./style";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import Pulse from "react-reveal/Pulse";
import Fade from "react-reveal/Fade";

const actualYear = new Date().getFullYear();

const BoxStyled = styled(Box)`
  justify-content: center;
  position: relative;
  top: 8vh;
  z-index: 999;
`;

const PaperStyled = styled(Paper)`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  > div {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }

  > a {
    color: ${ColorPallete.main};
    font-size: 2.5rem;
    transition: 150ms;
    cursor: pointer;
  }
`;

const LinkSVG = styled.a`
  color: ${ColorPallete.main};
  font-size: 2.5rem;
  transition: 150ms;
  cursor: pointer;
`;

const LinkFooter = styled(LinkSVG)`
    padding-bottom: 20px;
    font-size: 14px;
    text-align: center;
    color: ${ColorPallete.secondary};

    :hover {
        color: ${ColorPallete.textWhite};
    }
`

const Git = styled(LinkSVG)`
  :hover {
    color: ${ColorPallete.git};
  }
`;

const Linkedin = styled(LinkSVG)`
  :hover {
    color: ${ColorPallete.linkedin};
  }
`;

const Insta = styled(LinkSVG)`
  :hover {
    color: ${ColorPallete.insta};
  }
`;

const Email = styled.h2`
  margin-top: 20px;
  font-weight: normal;
  font-size: 1.2rem;
  cursor: pointer;
  transition: 350ms;

  color: ${ColorPallete.textGrey};

  :hover {
    font-size: 1.3rem;
    color: ${ColorPallete.secondary};
  }

  :active {
    color: ${ColorPallete.alter};
  }
`;

export const Contact = () => {
  return (
    <>
      <Container maxWidth="md">
        <HeaderComponent>
          <Pulse>
            <Fade left>
              <h1>Onde me encontrar?</h1>
            </Fade>
          </Pulse>
        </HeaderComponent>

        <Pulse cascade>
          <BoxStyled
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: 450,
              },
            }}
          >
            <PaperStyled elevation={3}>
              <div>
                <Tooltip title="Github" placement="top">
                  <Git
                    href="https://github.com/adrielgama"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub />
                  </Git>
                </Tooltip>
                <Tooltip title="Linkedin" placement="top">
                  <Linkedin
                    href="https://github.com/adrielgama"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillLinkedin />
                  </Linkedin>
                </Tooltip>
                <Tooltip title="Instagram" placement="top">
                  <Insta
                    href="https://github.com/adrielgama"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillInstagram />
                  </Insta>
                </Tooltip>
              </div>
              <Tooltip title="Clique para copiar" placement="top">
                <Email
                  onClick={() => {
                    navigator.clipboard.writeText("adrielgama@gmail.com");
                  }}
                >
                  adrielgama@gmail.com
                </Email>
              </Tooltip>
            </PaperStyled>
          </BoxStyled>
        </Pulse>
      </Container>
      <FooterComponent>
        <p>
          {`Copyright © ${actualYear} Desenvolvido por `}{" "}
          <LinkFooter href="https://github.com/adrielgama" target="_blank">
            Adriel Gama
          </LinkFooter>{" "}
        </p>
      </FooterComponent>
    </>
  );
};
