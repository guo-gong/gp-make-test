import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CoreTechnologies from '@/components/CoreTechnologies';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CoreTechnologies />
      <CTA />
      <Footer />
    </main>
  );
}
