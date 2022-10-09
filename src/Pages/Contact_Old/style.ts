import styled from "styled-components";
import { ColorPallete } from "../../themes/theme";

export const HeaderComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50vh;
  background-color: ${ColorPallete.secondary};
  color: ${ColorPallete.textBlack};

  h1 {
    margin-top: 4em;
    font-size: 4rem;
    text-align: center;

  }
  z-index: 1;
`;

export const FooterComponent = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 20vh;
  background-color: ${ColorPallete.main};
  color: ${ColorPallete.textWhite};
  z-index: 1;

  p {
    padding-bottom: 20px;
    font-size: 14px;
    text-align: center;
    color: ${ColorPallete.footer};
  }
`;

export const LinkSVG = styled.a`
  color: ${ColorPallete.main};
  font-size: 2.5rem;
  transition: 150ms;
  cursor: pointer;
`;

export const LinkFooter = styled(LinkSVG)`
  padding-bottom: 20px;
  font-size: 14px;
  text-align: center;
  color: ${ColorPallete.secondary};

  :hover {
    color: ${ColorPallete.textWhite};
  }
`;

export const Git = styled(LinkSVG)`
  :hover {
    color: ${ColorPallete.git};
  }
`;

export const Linkedin = styled(LinkSVG)`
  :hover {
    color: ${ColorPallete.linkedin};
  }
`;

export const Insta = styled(LinkSVG)`
  :hover {
    color: ${ColorPallete.insta};
  }
`;

export const Email = styled.h2`
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