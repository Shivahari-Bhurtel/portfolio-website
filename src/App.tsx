import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import Dashboard from "./sections/Dashboard.tsx";
import About from "./sections/About.tsx";
import Certificates from "./sections/Certificates.tsx";
import Projects from "./sections/Projects.tsx";
import Skills from "./sections/Skills.tsx";
import Contact from "./sections/Contact.tsx";
import { useScrollReveal } from "./hooks/useScrollReveal.ts";
import ForestTorch from "./components/ForestTorch.tsx";

function App() {
  useScrollReveal();

  return (
    <div className="font-body">
      <ForestTorch />
      <Navbar />
      <Dashboard />
      <Certificates />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
