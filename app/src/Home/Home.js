import React from 'react';
import Footer from '../General/Footer';
import Navigation from '../General/Navigation';
import { FeaturedBlog, FeaturedProject, Header, Introduction } from './components';

export default function Home(){
    return(
        <section>
            <Header/>
            <Navigation/>
            <Introduction/>
            <FeaturedProject/>
            <FeaturedBlog/>
            <Footer/>
        </section>
    )
}