import React from "react";
import Footer from "../General/Footer";
import Navigation from "../General/Navigation";
import Header from "./components/Header";
import Projects from "./components/Projects";
import { PortfolioContainer } from "./styles";


export default function Portfolio() {
  return (
    <PortfolioContainer>
        <Header/>
        <Navigation />
        <Projects/>
        <Footer />
    </PortfolioContainer>
  );
}
