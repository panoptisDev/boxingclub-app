import React, { useState } from "react";
import Video from "../../videos/box1.mp4";
import { Button } from "../ButtonElements";
import { GiBoxingGlove } from "react-icons/gi";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  DownBtnContainer
} from "./HeroElements";
import DownButton from "../DownButton";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>
          IRON <GiBoxingGlove /> BOXING GYM
        </HeroH1>
        <HeroP>est. 2019</HeroP>
        <HeroBtnWrapper>
          <Button
            to="contact"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            HIRE ME {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>

        <DownBtnContainer
          to="about"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          <DownButton />
        </DownBtnContainer>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
