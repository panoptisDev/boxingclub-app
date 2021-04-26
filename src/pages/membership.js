import React from "react";
import { GlobalStyles } from "../GlobalStyles";
import Navbar from "../components/Navbar";
import ReusableHero from "../components/ReusableHero";
import { HeroDataFour } from "../components/ReusableHero/Data";
import Footer from "../components/Footer";
import Accordion from "../components/Accordion";

const MembershipPage = () => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <ReusableHero {...HeroDataFour} />
      <Accordion />
      <Footer />
    </>
  );
};

export default MembershipPage;
