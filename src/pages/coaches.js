import React from "react";
import { GlobalStyles } from "../GlobalStyles";
import ReusableHero from "../components/ReusableHero";
import { HeroDataTwo } from "../components/ReusableHero/Data";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Tabs from "../components/Tabs";

const CoachesPage = () => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <ReusableHero {...HeroDataTwo} />
      <Tabs />
      <Footer />
    </>
  );
};

export default CoachesPage;
