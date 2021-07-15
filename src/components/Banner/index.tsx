import banner from "../../assets/img/banner.png";
import { BannerSection, BannerImage, BannerTitle, SubtitleText } from "./style";

export const Banner = () => {
  return (
    <BannerSection>
      <BannerImage src={banner} alt="banner" />
      <BannerTitle>BLACK FRIDAY</BannerTitle>
      <SubtitleText>50% OFF</SubtitleText>
    </BannerSection>
  );
};
