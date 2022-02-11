import styled from "styled-components";
import { ColorPallete } from "../../themes/theme";

export const HeaderComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: ${ColorPallete.secondary};
  color: ${ColorPallete.textBlack};
  font-size: 64px;
  text-align: center;

  > h5 {
    padding: 0px 0 80px 0;
  }

  @media only screen and (max-width: 768px) {
    > h5 {
      padding: 0px 0 20px 0;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 30px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TextAbout = styled.div`
  display: flex;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.2rem;
  color: ${ColorPallete.textBlack};
  text-align: left;
  margin-right: 50px;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
    padding: 0 10px 40px 10px;
    text-align: justify;
    margin-right: 0;
  }
`;

export const ImageContainer = styled.div`
  border-radius: 10px;
  max-height: 36vh;
  background: ${ColorPallete.secondary};
  box-shadow: 14px 14px 35px #c1a610, -14px -14px 35px #f7d514;

  > img {
    border-radius: 10px;
  }

  @media only screen and (max-width: 540px) {
    max-height: 24vh;
    > img {
      max-width: 24vh;
    }
  }
`;
