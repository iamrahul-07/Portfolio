import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Home from "./Components/Home/Home"
import Projects from "./Components/Projects/Projects"
import Skills from "./Components/Skills/Skills"
import Navbar from "./Pages/Navbar/Navbar"


const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    </>
  )
}

export default App