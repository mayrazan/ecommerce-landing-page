import styled from "styled-components";

export const BoxFlag = styled.div`
  max-width: 200px;
  height: 300px;
  position: relative;
  border: 1px solid #e6e8ea;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  transition: all 0.4s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #e6e8ea;
    transform: scale(1.1);
  }

  .ribbon {
    position: absolute;
    right: -5px;
    top: -5px;
    z-index: 1;
    overflow: hidden;
    width: 75px;
    height: 75px;
    text-align: right;
  }
  .ribbon span {
    font-size: 10px;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    line-height: 20px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    width: 100px;
    display: block;
    background: linear-gradient(#f8475f 0%, #f8475f 100%);
    box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 1);
    position: absolute;
    top: 19px;
    right: -21px;
  }
  .ribbon span::before {
    content: "";
    position: absolute;
    left: 0px;
    top: 100%;
    z-index: -1;
    border-left: 3px solid #f8475f;
    border-right: 3px solid transparent;
    border-bottom: 3px solid transparent;
    border-top: 3px solid #f8475f;
  }
  .ribbon span::after {
    content: "";
    position: absolute;
    right: 0px;
    top: 100%;
    z-index: -1;
    border-left: 3px solid transparent;
    border-right: 3px solid #f8475f;
    border-bottom: 3px solid transparent;
    border-top: 3px solid #f8475f;
  }
`;

export const ProductNameStyled = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #7a7a7a;
`;

export const OldPriceStyled = styled(ProductNameStyled)`
  font-weight: normal;
  text-decoration-line: line-through;
`;

export const NewPriceStyled = styled(ProductNameStyled)`
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  color: #000000;
`;

export const ContainerProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  gap: 5px;
  cursor: pointer;
`;
