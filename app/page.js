import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import References from '@/components/References';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      {/* sekce vypadaji prazdne  */}
      {/* <WhyChooseUs /> */}
      <References />
      <Contact />
      <Footer />
    </div>
  );
}
