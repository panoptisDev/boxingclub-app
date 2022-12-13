import React from "react";
import {
  AboutContainer,
  AboutWrapper,
  BoxOne,
  BoxTwo,
  AboutH4,
  AboutH1,
  AboutP,
  AboutLogo,
  AboutButton
} from "./AboutInfoElements";

const AboutInfo = () => {
  return (
    <AboutContainer>
      <AboutWrapper>
        <BoxOne>
          <AboutLogo src="" alt="" />
          <AboutH4>Hello subtitel</AboutH4>
          <AboutH1>Title</AboutH1>
          <AboutP>
            övrig info.
          </AboutP>
          <AboutButton></AboutButton>
        </BoxOne>
        <BoxTwo>
          <AboutLogo src="" alt="" />
          <AboutH4>Hello subtitel</AboutH4>
          <AboutH1>Title</AboutH1>
          <AboutP>
            Övrig Info.
          </AboutP>
          <AboutButton></AboutButton>
        </BoxTwo>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default AboutInfo;
