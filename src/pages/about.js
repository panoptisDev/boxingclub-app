import React from "react";
import ReusableHero from "../components/ReusableHero";
import { HeroDataOne } from "../components/ReusableHero/Data";
import { GlobalStyles } from "../GlobalStyles";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutInfo from "../components/AboutInfo";

const about = () => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <ReusableHero {...HeroDataOne} />
      <AboutInfo />
      <Footer />
    </>
  );
};

export default about;
