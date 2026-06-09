import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TomorrowSection from "../components/TomorrowSection";
import ProgressSection from "../components/ProgressSection";
import ServicesSection from "../components/ServicesSection";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export default function App() {
  return (
    <div id="elementum-landing-page" className="min-h-screen bg-white text-navy font-sans antialiased selection:bg-highlight selection:text-black">
      {/* SECTION 1: NAVBAR */}
      <Navbar />

      {/* SECTION 2: HERO */}
      <Hero />

      {/* SECTION 3: TOMORROW SECTION */}
      <TomorrowSection />

      {/* SECTION 4: PROGRESS SECTION */}
      <ProgressSection />

      {/* SECTION 5: SERVICES SECTION */}
      <ServicesSection />

      {/* SECTION 6: TESTIMONIALS */}
      <Testimonials />

      {/* SECTION 7: NEWSLETTER CTA */}
      <Newsletter />

      {/* SECTION 8: FOOTER */}
      <Footer />
    </div>
  );
}
