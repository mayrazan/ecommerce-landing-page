import { Banner } from "../../components/Banner";
import { CountdownTimer } from "../../components/CountdownTimer";
import { Form } from "../../components/Form";
import { Header } from "../../components/Header";
import { ProductsList } from "../../components/ProductsList";

export const Home = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 6000000);
  return (
    <>
      <Header />
      <Banner />
      <CountdownTimer expiryTimestamp={Number(time)} />
      <ProductsList />
      <Form />
    </>
  );
};
