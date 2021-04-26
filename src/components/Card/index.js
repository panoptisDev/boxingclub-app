import React from "react";
import { CardContainer, CardP, CardImg } from "./CardElements";

const Card = ({ name, img }: props) => {
  return (
    <CardContainer>
      <CardImg src={img} alt="alt" />
      <CardP>{name}</CardP>
    </CardContainer>
  );
};

export default Card;
