import { Hero } from '../components/Hero';
import { TrustBar } from '../components/TrustBar';
import { WhyNashik } from '../components/WhyNashik';
import { WhatWeOffer } from '../components/WhatWeOffer';
import { ProjectExplorer } from '../components/ProjectExplorer';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <WhyNashik />
      <WhatWeOffer />
      <ProjectExplorer />
      <Contact />
      <Footer />
    </>
  );
}
