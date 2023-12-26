
import Navbars from "./component/navbar/Navbars";
import Home from "./component/about/Home";
import Skills from "./component/skills/Skills";
import Experience from "./component/experience/Experience";
import Contact from "./component/contact/Contact";
import Projects from "./component/projects/Projects";
import Education from "./component/Education/Education";

function App() {
 

  return (
    <>
    <Navbars />
      <Home />
       <Skills /> 
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </>
  )
}

export default App
