import styled from "styled-components";
import { media } from "../../styles/media";
import { theme } from "../../styles/theme";

export const FooterContainer = styled.footer`
  background-color: ${theme.colors.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  min-height: 18vh;
  gap: 10px;
`;

export const Text = styled.h4`
  font-size: 1.5rem;
  color: white;

  ${media.custom(252)} {
    font-size: 1rem;
  }
`;

export const SocialMediaContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  .icon-3d {
    padding: 10px;
    -webkit-animation: icon3d 200ms 10;
    animation: icon3d 200ms 10;
    color: #fff;
    cursor: pointer;
    &:hover {
      -webkit-animation: icon3d 200ms infinite;
      animation: icon3d 200ms infinite;
    }
  }

  @keyframes icon3d {
    0% {
      text-shadow: 5px 4px rgba(244, 67, 54, 1), -5px -6px rgba(33, 150, 243, 1);
    }
    25% {
      text-shadow: -5px -6px rgba(244, 67, 54, 1), 5px 4px rgba(33, 150, 243, 1);
    }
    50% {
      text-shadow: 5px -4px rgba(244, 67, 54, 1), -8px 4px rgba(33, 150, 243, 1);
    }
    75% {
      text-shadow: -8px -4px rgba(244, 67, 54, 1),
        -5px -4px rgba(33, 150, 243, 1);
    }
    100% {
      text-shadow: -5px 0 rgba(244, 67, 54, 1), 5px -4px rgba(33, 150, 243, 1);
    }
  }
`;
