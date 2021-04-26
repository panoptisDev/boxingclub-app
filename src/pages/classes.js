import React from "react";
import { GlobalStyles } from "../GlobalStyles";
import Navbar from "../components/Navbar";
import ReusableHero from "../components/ReusableHero";
import { HeroDataThree } from "../components/ReusableHero/Data";
import Footer from "../components/Footer";

const ClassesPage = () => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <ReusableHero {...HeroDataThree} />
      <Footer />
    </>
  );
};

export default ClassesPage;
