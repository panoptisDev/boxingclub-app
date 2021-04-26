import React, { useState, useEffect } from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
import { DownArrowContainer, ArrowIcon } from "./DownButtonElements";

const DownButton = () => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  return (
    <DownArrowContainer scrollNav={scrollNav}>
      <ArrowIcon
        to="about"
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
        offset={-80}
      >
        <BsChevronDoubleDown />
      </ArrowIcon>
    </DownArrowContainer>
  );
};

export default DownButton;
