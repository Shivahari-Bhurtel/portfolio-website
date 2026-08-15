import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import Dashboard from "./sections/Dashboard.tsx";
import About from "./sections/About.tsx";
import Certificates from "./sections/Certificates.tsx";
import Projects from "./sections/Projects.tsx";
import Skills from "./sections/Skills.tsx";

/**
 * Root App Component
 * 
 * Portfolio page layout with the following sections:
 * 1. Navbar - Sticky navigation header
 * 2. Dashboard - Hero section with introduction and profile image
 * 3. Certificates - Learning achievements and credentials
 * 4. Projects - Featured work with expandable details
 * 5. Skills - Technical expertise organized by category
 * 6. About - Personal story and background (final section)
 * 7. Footer - Contact information and social links
 */
function App() {
  return (
    <div className="font-body">
      <Navbar />
      <Dashboard />
      <Certificates />
      <Projects />
      <Skills />
      <About />
      <Footer />
    </div>
  );
}

export default App;
