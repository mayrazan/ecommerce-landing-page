import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  flex-wrap: wrap;
  height: 80px;
`;

export const ContainerHeaderInfo = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 2;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const ContainerHeaderLogin = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: space-evenly;
`;

export const Text = styled.p`
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  &:hover {
    color: aliceblue;
    transform: scale(1.3);
    font-weight: bold;
  }
`;
