import Intro from "./Components/Intro/Container";
import About from "./Components/About/Container.js";
import Quote from "./Components/Quote/Container";
import Portfolio from "./Components/Portfolio/Container";
import Contact from "./Components/Contact/Container";
import Nav from "./Components/Nav/Container.js";
import Footer from "./Components/Footer/Container.js";

function App() {
  return (
    <>
      <Intro/>
      <Nav/>
      <About/>
      <Quote/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
