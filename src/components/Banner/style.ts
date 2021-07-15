import styled from "styled-components";
import { media } from "../../styles/media";

export const BannerSection = styled.section`
  display: flex;
  justify-content: center;
  max-height: 450px;
  position: relative;
`;

export const BannerImage = styled.img`
  width: 100%;
`;

export const BannerTitle = styled.h1`
  position: absolute;
  font-size: 4rem;
  color: wheat;
  font-family: acme;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${media.desktop} {
    font-size: 3rem;
  }

  ${media.phone} {
    font-size: 2rem;
  }

  ${media.custom(350)} {
    font-size: 1.2rem;
  }
`;

export const SubtitleText = styled.h2`
  position: absolute;
  color: wheat;
  font-size: xxx-large;
  font-family: "Acme";
  top: 60%;

  ${media.desktop} {
    font-size: 3rem;
  }

  ${media.phone} {
    font-size: 2rem;
  }

  ${media.custom(350)} {
    font-size: 1.2rem;
  }
`;
