import logo from "../../assets/img/logo-new.png";
import iconSearch from "../../assets/icons/icon-search.png";
import {
  HeaderStyled,
  ContainerHeaderInfo,
  ContainerHeaderLogin,
  Text,
} from "./style";

export const Header = () => {
  return (
    <HeaderStyled>
      <ContainerHeaderInfo>
        <img src={logo} alt="logo" />
        <Text>Home</Text>
        <Text>Faq</Text>
        <Text>Contato</Text>
      </ContainerHeaderInfo>

      <ContainerHeaderLogin>
        <Text>Login</Text>
        <img src={iconSearch} alt="busca" style={{ cursor: "pointer" }} />
      </ContainerHeaderLogin>
    </HeaderStyled>
  );
};
