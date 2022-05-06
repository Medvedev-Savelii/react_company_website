import React from "react";
import "./HomeStyles.css";
import Navbar from "../navbar/Navbar";
import Hero from "../hero/Hero";
import Pricing from "../pricing/Pricing";
import Testimonials from "../testimonials/Testimonials";
import Faq from "../faq/Faq";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Pricing />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
