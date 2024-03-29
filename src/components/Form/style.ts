import styled, { css } from "styled-components";
import { media } from "../../styles/media";
import { theme } from "../../styles/theme";

export const ContainerSectionForm = styled.div`
  background-color: ${theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  min-height: 18vh;
`;

export const TitleForm = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 22px;
  color: aliceblue;

  ${media.custom(540)} {
    font-size: 3vw;
  }

  ${media.custom(420)} {
    font-size: 4vw;
  }
`;

export const FormContainer = styled.form`
  width: 100%;
  max-width: 716px;
  /* height: 48px; */
  flex-wrap: wrap;
  display: flex;
  flex-shrink: 2;
  gap: 8px;
  align-items: center;
  justify-content: center;

  ${media.custom(570)} {
    flex-direction: column;
  }
`;

export const InputStyled = styled.input`
  max-width: 280px;
  width: 100%;
  height: 48px;
  background: #ffffff;
  border-radius: 5px;
  border: #ffffff;

  &:focus {
    border: #ffffff;
  }

  &::placeholder {
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: #585858;
    padding-left: 15px;
  }
`;

export const ButtonSubmitForm = styled.button`
  background: #000000;
  border-radius: 5px;
  width: 100%;
  max-width: 139px;
  height: 48px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  color: #ffffff;
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: scale(1.1);
    background-color: #2e2929;
  }
`;

interface IMessage {
  isMessageDisplayedSuccess?: boolean;
  isMessageDisplayedWarning?: boolean;
  messageSuccess?: boolean;
  messageError?: boolean;
}

const isMessageDisplayedWarning = css`
  color: rgb(248 93 82);
`;

const isMessageDisplayedSuccess = css`
  color: #00cc99;
`;

export const TextMessageStyled = styled.span<IMessage>`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-align: center;

  ${({ messageSuccess }) =>
    messageSuccess &&
    css`
       {
        ${() => isMessageDisplayedSuccess};
      }
    `}
  ${({ messageError }) =>
    messageError &&
    css`
       {
        ${() => isMessageDisplayedWarning};
      }
    `}
`;
