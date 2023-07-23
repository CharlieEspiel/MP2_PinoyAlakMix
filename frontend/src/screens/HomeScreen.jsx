import React from "react";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Mixture from "../components/Mixture";

const HomeScreen = () => {
  return (
    <>
      <Hero />
      <Feature />
      <Mixture />
      <Footer />
    </>
  );
  // <Feauture /> Featuring Drinks for the day.
  // <Mixture /> list of created mixture// Card
  // <Footer /> Contacts Info, & footer information
};

export default HomeScreen;
