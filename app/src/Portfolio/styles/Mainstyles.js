import styled from "styled-components";
import HeroImg from "../assets/hero.jpeg";

export const PortfolioContainer = styled.section`
  background-image: url(${HeroImg});
  background-position: top;
  background-repeat: no-repeat;
  background-size: 1200px;
  background-attachment: fixed;
  height: ${window.screen.height};
  //   min-height: ${window.screen.height};
`;
