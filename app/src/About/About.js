import React from "react";
import Footer from '../General/Footer'
import Navigation from "../General/Navigation";
import { Details, Header, Resume } from "./components";
import Bio from "./components/Bio";
import { AboutContainer } from "./styles";

export default function About(){
    return(
        <AboutContainer>
            <Header/>
            <Navigation/>
            <Bio/>
            <Details/>
            <Resume/>
            <Footer/>
        </AboutContainer>
    )
}