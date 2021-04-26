import styled from "styled-components";

export const ReusableHeroContainer = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
  height: 80vh;
  color: black;
`;

export const ReusableHeroBG = styled.img`
  width: 100vw;
  height: 100%;
  object-fit: cover;
`;
export const ReusableHeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ReusableHeroH1 = styled.div`
  color: #fff;
  font-size: 5rem;
  text-align: center;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
