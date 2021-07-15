import { FooterContainer, Text, SocialMediaContainer } from "./style";

export const Footer = () => {
  return (
    <FooterContainer>
      <Text>Criado por @mayrazan</Text>

      <SocialMediaContainer>
        <i className="fa fa-twitter fa-4x icon-3d"></i>
        <i className="fa fa-github fa-4x icon-3d"></i>
        <i className="fa fa-instagram fa-4x icon-3d"></i>
        <i className="fa fa-whatsapp fa-4x icon-3d"></i>
      </SocialMediaContainer>
    </FooterContainer>
  );
};
