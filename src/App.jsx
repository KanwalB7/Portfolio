import "./app.scss"
import Contact from "./components/contact/Contact";
import Experiences from "./components/experiences/Experiences";
import Experienceextended from "./components/experiences/experiencesextended/Experienceextended";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Project from "./components/project/Project";
// import Test from "./Test";


const App = () => {
  return <div>

    <section id="Home">
    {/* Hero Section */}
    <Navbar/>
    <Hero/>
    </section>



    <section id="Work Experience"><Parallax type="experiences"/></section>
    <section><Experiences/></section>
    <section><Experienceextended/></section>
  
    <section id="Projects"><Parallax type="portfolio"/></section>
    <section><Project/></section>

    <section id="Contact"><Contact/></section>

  </div>;
};

export default App;
