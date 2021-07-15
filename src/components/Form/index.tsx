import { useState, FormEvent } from "react";
import {
  ButtonSubmitForm,
  ContainerSectionForm,
  FormContainer,
  InputStyled,
  TitleForm,
  TextMessageStyled,
} from "./style";

interface IFormData {
  name: FormDataEntryValue | null;
  email: FormDataEntryValue | null;
}

interface IHandleSubmit {
  event: FormEvent<HTMLFormElement> & EventTarget;
  preventDefault(): EventTarget;
  currentTarget: HTMLFormElement;
}

export const Form = () => {
  const [messageSuccess, setMessageSuccess] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleSubmit = (event: IHandleSubmit & FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const formValues = {
      name: formData.get("name"),
      email: formData.get("email"),
    };

    let hasData: IFormData[] =
      JSON.parse(localStorage.getItem("users") || "[]") || [];

    if (hasData) {
      const hasEmail = hasData.find(
        (item: IFormData) => item.email === formData.get("email")
      );

      if (!hasEmail) {
        hasData.push(formValues);
        localStorage.setItem("users", JSON.stringify(hasData));
        setMessageSuccess(true);
        setTimeout(() => {
          setMessageSuccess(false);
        }, 2300);
      } else {
        setMessageError(true);
        setTimeout(() => {
          setMessageError(false);
        }, 2300);
      }
    } else {
      localStorage.setItem("users", JSON.stringify(formValues));
      setMessageSuccess(true);
      setTimeout(() => {
        setMessageSuccess(false);
      }, 2300);
    }
    event.currentTarget.reset();
  };

  return (
    <ContainerSectionForm>
      <TitleForm>Cadastre-se e fique por dentro das promoções!</TitleForm>
      <FormContainer onSubmit={handleSubmit}>
        <InputStyled
          type="text"
          placeholder="Digite seu nome"
          name="name"
          id="name"
          required
        />
        <InputStyled
          type="email"
          name="email"
          id="email"
          required
          placeholder="Digite seu email"
        />
        <ButtonSubmitForm type="submit">Cadastrar</ButtonSubmitForm>
      </FormContainer>
      {messageSuccess && (
        <TextMessageStyled messageSuccess={messageSuccess}>
          Seu cadastro foi realizado com sucesso! A partir de agora você
          receberá novidades e ofertas exclusivas.
        </TextMessageStyled>
      )}
      {messageError && (
        <TextMessageStyled messageError={messageError}>
          E-mail já cadastrado! Tente novamente.
        </TextMessageStyled>
      )}
    </ContainerSectionForm>
  );
};
