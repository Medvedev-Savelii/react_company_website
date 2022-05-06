import React from "react";
import "./HomeStyles.css";
import Navbar from "../navbar/Navbar";
import Hero from "../hero/Hero";
import Pricing from "../pricing/Pricing";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Pricing />
    </>
  );
};

export default Home;
