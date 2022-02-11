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
