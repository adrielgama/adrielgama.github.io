import React from "react";
import PortraitPhoto from "../../images/portrait.png";

import * as S from "./styles";

const Menu = () => {
  return (
    <S.MenuWrapper>
      <S.MenuContainer>
        <S.MenuTitle>
          <S.MenuAvatar
            alt="Adriel Gama"
            sx={{ width: 200, height: 200 }}
            src={PortraitPhoto}
          />
          <h1>Adriel de Oliveira Gama</h1>
          <p>Desenvolvedor Front-end PL</p>
        </S.MenuTitle>
        <S.MenuDescription>
          <p>Salvador, Bahia - Brasil</p>
          <p>+55 (71) 9 9655-9476</p>
        </S.MenuDescription>
        <div>3</div>
      </S.MenuContainer>
    </S.MenuWrapper>
  );
};

export default Menu;
