import { FC } from "react";
import ProductItem from "../../components/ProductItem";

const products = [
  {
    id: 1,
    title: "ABC",
    description: "ABCD",
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0269/7763/2389/files/collection_header_Men_Desktop.jpg",
    price: "5000",
  },
  {
    id: 2,
    title: "ABC",
    description: "ABCD",
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0269/7763/2389/files/collection_header_Men_Desktop.jpg",
    price: "5000",
  },
  {
    id: 3,
    title: "ABC",
    description: "ABCD",
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0269/7763/2389/files/collection_header_Men_Desktop.jpg",
    price: "5000",
  },
];

const Men: FC = () => {
  return (
    <>
      <div className="row producList">
        {products.map((product) => {
          return <ProductItem key={product.id} product={product} />;
        })}
      </div>
    </>
  );
};

export default Men;
