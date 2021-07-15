// import { useState } from "react";
import {
  ButtonSubmitForm,
  ContainerSectionForm,
  FormContainer,
  InputStyled,
  TitleForm,
} from "./style";

interface IFormData {
  name: FormDataEntryValue | null;
  email: FormDataEntryValue | null;
}

export const Form = () => {
  //   const [messageSuccess, setMessageSuccess] = useState(false);
  //   const [messageError, setMessageError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> & EventTarget) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

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
        // setMessageSuccess(true);
        console.log("cadastro realizado com sucesso");
      } else {
        console.log("email existe");
        // setMessageError(true);
      }
    } else {
      localStorage.setItem("users", JSON.stringify(formValues));
      //   setMessageSuccess(true);
      console.log("cadastro realizado com sucesso");
    }
    e.currentTarget.reset();
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
    </ContainerSectionForm>
  );
};
