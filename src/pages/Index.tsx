import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import WebinarPromo from "@/components/WebinarPromo";
import Gallery from "@/components/Gallery";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <WhyChooseUs />
      <Products />
      <Testimonials />
      <WebinarPromo />
      <Gallery />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
