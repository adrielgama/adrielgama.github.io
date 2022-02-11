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
`;

// export const ContainerCard = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-evenly;
//   position: relative;
//   top: 10vh;
//   z-index: 999 !important;

//   @media only screen and (max-width: 768px) {
//     flex-direction: column;
//   }
// `;

// export const CardComponent = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: flex-start;

//   padding: 30px;
//   background-color: ${ColorPallete.textWhite};
//   width: 25vw;
//   height: fit-content;
//   min-height: 55vh;
//   max-height: 60vh;
//   box-shadow: 3px 4px 9px rgba(27, 28, 30, 0.2);
//   border-radius: 10px;
//   z-index: 999 !important;

//   > div {
//     color: ${ColorPallete.secondary};
//     font-size: 2.5rem;
//     transition: 150ms;
//     :hover {
//       color: ${ColorPallete.alter};
//     }
//   }

//   > h2 {
//     font-family: Quantico;
//     font-style: normal;
//     font-weight: normal;
//     font-size: 2rem;
//     line-height: 51px;
//     text-align: center;
//   }

//   > h4 {
//     font-family: Quantico;
//     font-style: normal;
//     font-weight: normal;
//     font-size: 1.5rem;
//     line-height: 34px;
//     text-align: center;
//     color: ${ColorPallete.alter};
//     padding: 40px 0 30px 0;
//   }

//   > ul {
//     li {
//       font-family: Roboto;
//       font-style: normal;
//       font-weight: normal;
//       font-size: 1rem;
//       line-height: 33px;

//       text-align: center;
//     }
//   }

//   @media only screen and (max-width: 768px) {
//     padding: 40px;
//     width: 45vw;
//     /* height: fit-content; */

//     > div {
//       font-size: 1.5rem;
//     }

//     > h2 {
//       font-size: 1.4rem;
//       line-height: normal;
//     }

//     > h4 {
//       font-size: 1.2rem;
//       line-height: normal;
//       padding: 30px 0 20px 0;
//     }

//     > ul {
//       li {
//         font-size: 0.9rem;
//         line-height: 22px;
//       }
//     }
//   }
// `;
