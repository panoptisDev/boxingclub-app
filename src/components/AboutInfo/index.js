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
            Wenn Sie als gewerblicher Kunde Interesse an größeren Stoffmengen
            für die Bereiche Bekleidung oder Interior haben, kontaktieren Sie
            uns oder setzten Sie sich mit einer unserer internationalen
            Repräsentanzen in Verbindung.
          </AboutP>
          <AboutButton></AboutButton>
        </BoxOne>
        <BoxTwo>
          <AboutLogo src="" alt="" />
          <AboutH4>Hello subtitel</AboutH4>
          <AboutH1>Title</AboutH1>
          <AboutP>
            Wenn Sie als gewerblicher Kunde Interesse an größeren Stoffmengen
            für die Bereiche Bekleidung oder Interior haben, kontaktieren Sie
            uns oder setzten Sie sich mit einer unserer internationalen
            Repräsentanzen in Verbindung.
          </AboutP>
          <AboutButton></AboutButton>
        </BoxTwo>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default AboutInfo;
