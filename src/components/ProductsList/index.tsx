import { products } from "../../utils/products";
import { ProductCard } from "../ProductCard";
import { ContainerProductsList, ContainerProducts, TextH3 } from "./style";

export const ProductsList = () => {
  return (
    <ContainerProducts>
      <div>
        <TextH3>Confira algumas de nossas ofertas</TextH3>
      </div>

      <ContainerProductsList>
        {products.map((item) => {
          return (
            <ProductCard
              key={item.id}
              img={item.img}
              name={item.name}
              oldPrice={item.oldPrice}
              newPrice={item.newPrice}
            />
          );
        })}
      </ContainerProductsList>
    </ContainerProducts>
  );
};
