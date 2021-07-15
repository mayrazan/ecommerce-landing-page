import styled from "styled-components";
import { media } from "../../styles/media";
import { theme } from "../../styles/theme";

export const CountdownContainer = styled.div`
  text-align: center;
  background-color: ${theme.colors.backgroundLight};
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px 0 15px 0;
`;

export const TimerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.span`
  font-size: 0.7rem;
  color: aliceblue;

  ${media.custom(350)} {
    font-size: 2.5vw;
  }
`;

export const DigitContainer = styled.div`
  display: flex;
`;

export const SingleDigit = styled.span`
  display: flex;
  font-size: calc(3.5vw + 2vmin);
  background-color: #404549;
  border-radius: 5px;
  padding: 10px 12px;
  color: aliceblue;
  font-family: "Montserrat";
`;

export const TextH2 = styled.h2`
  font-size: calc(2vw + 1vmin);
  font-weight: 400;
  font-family: "Montserrat";
  color: aliceblue;
  font-weight: 500;

  ${media.tablet} {
    font-size: 3.5vw;
  }

  ${media.phone} {
    font-size: 6vw;
  }
`;

export const PointsText = styled.span`
  color: #404549;
  font-size: 3vw;
`;

export const ContainerElements = styled(TimerContainer)``;
