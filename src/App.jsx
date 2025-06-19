import './App.css'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Headings from './components/headings/Headings'
import Navbar from './components/navbar/Navbar'
import Projects from './components/projects/Projects'

function App() {

  return (
    <>
      <Navbar />

      <Headings />

      <About />

      <Projects />

      <Contact />
    </>
  )
}

export default App
