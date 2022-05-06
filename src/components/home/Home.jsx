import React from "react";
import "./HomeStyles.css";
import Navbar from "../navbar/Navbar";
import Hero from "../hero/Hero";
import Pricing from "../pricing/Pricing";
import Testimonials from "../testimonials/Testimonials";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Pricing />
      <Testimonials />
    </>
  );
};

export default Home;
