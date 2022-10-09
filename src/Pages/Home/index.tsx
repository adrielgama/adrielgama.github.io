import { Container } from "@mui/material";
import * as S from "./style";
import { HiChevronDoubleDown } from "react-icons/hi";
import Pulse from "react-reveal/Pulse";
import Fade from "react-reveal/Fade";

import Menu from '../../Components/Menu';

export const Home = (...props: any[]) => {
  const language = props[0].getLanguage;

  return (
    <>
      <Menu />
    </>
  );
};
