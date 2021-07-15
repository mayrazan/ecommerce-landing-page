import {
  BoxFlag,
  ProductNameStyled,
  OldPriceStyled,
  NewPriceStyled,
  ContainerProductInfo,
} from "./style";

interface IProductCard {
  img: string;
  name: string;
  oldPrice: string;
  newPrice: string;
}

export const ProductCard = ({
  img,
  name,
  oldPrice,
  newPrice,
}: IProductCard) => {
  return (
    <BoxFlag>
      <img src={img} alt={img} />
      <ContainerProductInfo>
        <ProductNameStyled>{name}</ProductNameStyled>
        <OldPriceStyled>{oldPrice}</OldPriceStyled>
        <NewPriceStyled>{newPrice}</NewPriceStyled>
      </ContainerProductInfo>

      <div className="ribbon">
        <span>50% OFF</span>
      </div>
    </BoxFlag>
  );
};
