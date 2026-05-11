import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Experience from './components/Experience';
import FeaturedWork from './components/FeaturedWork';
import Education from './components/Education';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1e]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <FeaturedWork />
        <Education />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
