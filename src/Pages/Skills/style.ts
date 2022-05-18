import styled from "styled-components";
import { ColorPallete } from "../../themes/theme";

export const HeaderComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${ColorPallete.main};
  color: ${ColorPallete.textWhite};

  h1 {
    font-size: 4rem;
    text-align: center;
    padding-top: 10vh;
  }

  @media only screen and (max-width: 426px) {
    h1 {
      font-size: 3.5rem;
    }
  }
`;
