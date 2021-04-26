import React from "react";
import {
  ReusableHeroContainer,
  ReusableHeroBG,
  ReusableHeroContent,
  ReusableHeroH1
} from "./ReusableHeroElements";

const ReusableHero = ({ bgImg, title, alt }) => {
  return (
    <ReusableHeroContainer>
      <ReusableHeroBG src={bgImg} alt={alt} />
      <ReusableHeroContent>
        <ReusableHeroH1>{title}</ReusableHeroH1>
      </ReusableHeroContent>
    </ReusableHeroContainer>
  );
};

export default ReusableHero;
