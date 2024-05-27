import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Cards from "./components/cards/Cards";
import Testimonial from "./components/cards/Testimonial";
import Testimonials from "./components/cards/Testimonials";
import Cta from "./components/footer/Cta";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="space-y-10">
        <Hero />
      </div>
      <Cards />
      <Testimonial />
      <Testimonials />
      <Cta />
      <Footer />
    </>
  );
}

export default App;
