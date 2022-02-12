import styled from "styled-components";
import { ColorPallete } from "../../themes/theme";

export const HeaderComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: ${ColorPallete.main};
  color: ${ColorPallete.textWhite};
  font-size: 64px;
  text-align: center;
`;

export const ChevronIcon = styled.div`
  position: absolute;
  left: 50vw;
  bottom: 5vh;
  color: ${ColorPallete.secondary};
  font-size: 25px;
  cursor: pointer;
  transition: 550ms;

  animation: mouse 2s ease-in-out infinite;

  @keyframes mouse {
    0% {
      bottom: 50px;
    }
    50% {
      bottom: 10px;
    }
    100% {
      bottom: 50px;
    }
  }

  :hover {
    color: ${ColorPallete.textWhite};
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }
`;
