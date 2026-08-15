import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import Dashboard from "./sections/Dashboard.tsx";
import Certificates from "./sections/Certificates.tsx";
import Projects from "./sections/Projects.tsx";
import Skills from "./sections/Skills.tsx";

function App() {
  return (
    <div className="font-body">
      <Navbar />
      <Dashboard />
      <Certificates />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
