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
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/about">About.</FooterLink>
              <FooterLink to="/about">About.</FooterLink>
              <FooterLink to="/about">About.</FooterLink>
              <FooterLink to="/about">About.</FooterLink>
              <FooterLink to="/about">About.</FooterLink>
              <FooterLink to="/about">About.</FooterLink>
              <FooterLink to="/about">About.</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">
              IRON <GiBoxingGlove />
            </SocialLogo>
            <WebsiteRights>
              IRON <GiBoxingGlove /> &copy; {new Date().getFullYear()} All
              rights reserved. | Developed by BernardDigitalLTD.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
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
