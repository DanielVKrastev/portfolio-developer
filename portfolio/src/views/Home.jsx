import { useEffect, useState } from 'react'
import About from '../components/about/About'
import Contact from '../components/contact/Contact'
import Headings from '../components/headings/Headings'
import Navbar from '../components/navbar/Navbar'
import Projects from '../components/projects/Projects'
import Skills from '../components/skills/Skills'
import aboutApi from '../api/aboutApi'
import skillsApi from '../api/skillsApi'
import certificatesApi from '../api/certificatesApi'
import projectsApi from '../api/projectsApi'
import { ToTopButton } from '../components/to-top-button/ToTopButton'
import LoadingSpinner from '../components/loading-spinner/LoadingSpinner'

export default function Home() {
  const [loading, setLoading] = useState(true);

  const [aboutMe, setAboutMe] = useState({});
  const [techStack, setTechStack] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function getData() {
      const aboutData = await aboutApi.getAll(1);
      const skillsData = await skillsApi.getAll();
      const certificatesData = await certificatesApi.getAll();
      const projectsData = await projectsApi.getAll();

      setAboutMe(aboutData[0]);
      setTechStack(skillsData);
      setCertificates(certificatesData);
      setProjects(projectsData);
      setLoading(false);
    }

    getData();
  }, []);

  if(loading) {
    return (<LoadingSpinner/>);
  }

  return (
    <>
      <Navbar />

      <Headings
        aboutMe={aboutMe}
        techStack={techStack}
      />

      <About
        aboutMe={aboutMe}
      />

      <Skills
        techStack={techStack}
        certificates={certificates}
      />
      <Projects
        projects={projects}
      />

      <Contact />

      <ToTopButton />
    </>
  )
}