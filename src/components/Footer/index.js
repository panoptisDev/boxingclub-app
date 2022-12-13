import React from "react";
import { GiBoxingGlove } from "react-icons/gi";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinkTitle,
  FooterLink,
  SocialIconLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons
} from "./FooterElements";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle>TRÄNINGSTIDER</FooterLinkTitle>
              <FooterLink to="/about">Måndag_18.30-20.00_Fysträning</FooterLink>
              <FooterLink to="/about">Tisdag_18.30-20.00_Fys_&_Teknik</FooterLink>
              <FooterLink to="/about">Onsdag_17.00-18.00_Nybörjare</FooterLink>
              <FooterLink to="/about">Torsdag_18.30-20.00_Teknik_&_Sparring</FooterLink>
              <FooterLink to="/about">.</FooterLink>
              <FooterLink to="/about">.</FooterLink>
              <FooterLink to="/about">.</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">
              BK Kelly <GiBoxingGlove />
            </SocialLogo>
            <WebsiteRights>
              BK KELLY <GiBoxingGlove /> &copy; {new Date().getFullYear()} All
              rights reserved. | Developed by PanoptisDev.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="https://www.facebook.com/people/BK-Kelly-Boxning/100067907108353/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="https://www.instagram.com/bk_kelly.orebro/" target="@bk_kelly.orebro" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Github">
                <FaGithub />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
