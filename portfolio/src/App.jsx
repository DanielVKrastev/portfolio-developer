import './App.css'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Headings from './components/headings/Headings'
import Navbar from './components/navbar/Navbar'
import Projects from './components/projects/Projects'
import { ScrollReveal } from './components/scroll-reveal/ScrollReveal'
import Skills from './components/skills/Skills'

function App() {

  return (
    <>
      <Navbar />

      <Headings />

      <About />

      <ScrollReveal once offset="0px 0px -20% 0px">
        <Skills />
      </ScrollReveal>

      <ScrollReveal once offset="0px 0px -20% 0px">
        <Projects />
      </ScrollReveal>

      <ScrollReveal once offset="0px 0px -20% 0px">
        <Contact />
      </ScrollReveal>
    </>
  )
}

export default App
