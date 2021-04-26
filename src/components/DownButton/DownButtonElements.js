import styled from "styled-components";
import { Link } from "react-scroll";

export const DownArrowContainer = styled.div`
width: 36px;
height: 36px;
border-radius: 50%;
background:color: transparent;
display: flex;
justify-content: center;
align-items: center;
`;

export const ArrowIcon = styled(Link)`
  margin-top: 3px;
  color: #fff;
  font-size: 30px;
  cursor: pointer;

  &:hover {
    color: #01bf71;
  }
`;
