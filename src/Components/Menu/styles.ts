import { Avatar, Container as MUIContainer } from "@mui/material";
import styled from "styled-components";
import { ColorPallete } from "../../themes/theme";

export const MenuWrapper = styled.div`
  width: 20vw;
  height: 100vh;
  background-color: ${ColorPallete.main};
`;

export const MenuContainer = styled.div`
  height: 100vh;
  color: ${ColorPallete.textWhite};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const ContainerHer = styled(MUIContainer)``;

export const MenuAvatar = styled(Avatar)``;

export const MenuTitle = styled.div`
  * {
    font-size: 14px;
    text-align: center;
  }
  h1 {
    font-weight: bold;
    margin-top: 30px;
  }
`;

export const MenuDescription = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  font-size: 14px;
`;
export const MenuSocial = styled.div``;
export const MenuFooter = styled.div``;
