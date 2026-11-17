import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Metrics from './components/Metrics.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Architecture from './components/Architecture.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Interview from './components/Interview.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen font-mono text-gray-200 bg-term-bg">
      <Nav />
      <main className="max-w-5xl px-4 mx-auto">
        <Hero />
        <Metrics />
        <About />
        <Projects />
        <Architecture />
        <Skills />
        <Experience />
        <Interview />
      </main>
      <Footer />
    </div>
  );
}
