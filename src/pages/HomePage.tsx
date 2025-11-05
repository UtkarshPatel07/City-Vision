import { Hero } from '../components/Hero';
import { WhatWeOffer } from "../components/WhatWeOffer";
import { PremiumPlots } from "../components/PremiumPlots";
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export function HomePage() {
  return (
    <>
      <Hero />
      <WhatWeOffer />
      <PremiumPlots />
      <Contact />
      <Footer />
    </>
  );
}
