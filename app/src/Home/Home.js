import React from 'react';
import Footer from '../General/Footer';
import Navigation from '../General/Navigation';
import { FeaturedBlog, FeaturedProject, Header, Introduction } from './components';
import { HomeContainer } from './styles';

export default function Home(){
    return(
        <HomeContainer>
            <Header/>
            <Navigation/>
            <Introduction/>
            <FeaturedProject/>
            <FeaturedBlog/>
            <Footer/>
        </HomeContainer>
    )
}