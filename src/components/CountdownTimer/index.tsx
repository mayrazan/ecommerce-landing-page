import { useTimer } from "react-timer-hook";
import {
  Container,
  DigitContainer,
  SingleDigit,
  TimerContainer,
  Title,
  TextH2,
  PointsText,
  CountdownContainer,
  ContainerElements,
} from "./style";

interface IProps {
  expiryTimestamp: number;
}

export const CountdownTimer = ({ expiryTimestamp }: IProps) => {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  const timer = [
    {
      id: 1,
      title: "DIAS",
      value: days,
      point: <PointsText>:</PointsText>,
    },
    {
      id: 2,
      title: "HORAS",
      value: hours,
      point: <PointsText>:</PointsText>,
    },
    {
      id: 3,
      title: "MINUTOS",
      value: minutes,
      point: <PointsText>:</PointsText>,
    },
    {
      id: 4,
      title: "SEGUNDOS",
      value: seconds,
      point: "",
    },
  ];

  return (
    <CountdownContainer>
      <TextH2>A oferta começa em</TextH2>
      <TimerContainer>
        {timer.map((item) => {
          return (
            <ContainerElements key={item.id}>
              <Container>
                <Title>{item.title}</Title>
                <DigitContainer>
                  <SingleDigit>{item.value}</SingleDigit>
                </DigitContainer>
              </Container>
              <PointsText>{item.point}</PointsText>
            </ContainerElements>
          );
        })}
      </TimerContainer>
    </CountdownContainer>
  );
};
