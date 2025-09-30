import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ProjectExplorer } from './components/ProjectExplorer';
import { WhyNashik } from './components/WhyNashik';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <TrustBar />
      <ProjectExplorer />
      <WhyNashik />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}