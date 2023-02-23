import { FC, useState } from "react";
import ProductItem from "../ProductItem";
import Pagination from "../Pagination";
import SideBarMobile from "../layouts/MainLayout/SideBarMobile";

const ProductList: FC = () => {
  const products = [
    {
      title: "AZZARO",
      description: "Azzaro Chrome For Men By Azzaro Eau De Toilette Spray",
      price: "$36.95 - $92.95",
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Azzaro-Chrome-Mens-Eau-de-Toilette-Spray-6.8-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Main.jpg?v=1580828163",
    },
    {
      title: "AZZARO",
      description: "Azzaro Chrome For Men By Azzaro Eau De Toilette Spray",
      price: "$36.95 - $92.95",
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Azzaro-Chrome-Mens-Eau-de-Toilette-Spray-6.8-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Main.jpg?v=1580828163",
    },
    {
      title: "AZZARO",
      description: "Azzaro Chrome For Men By Azzaro Eau De Toilette Spray",
      price: "$36.95 - $92.95",
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Azzaro-Chrome-Mens-Eau-de-Toilette-Spray-6.8-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Main.jpg?v=1580828163",
    },
    {
      title: "AZZARO",
      description: "Azzaro Chrome For Men By Azzaro Eau De Toilette Spray",
      price: "$36.95 - $92.95",
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Azzaro-Chrome-Mens-Eau-de-Toilette-Spray-6.8-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Main.jpg?v=1580828163",
    },
    {
      title: "AZZARO",
      description: "Azzaro Chrome For Men By Azzaro Eau De Toilette Spray",
      price: "$36.95 - $92.95",
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Azzaro-Chrome-Mens-Eau-de-Toilette-Spray-6.8-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Main.jpg?v=1580828163",
    },
    {
      title: "AZZARO",
      description: "Azzaro Chrome For Men By Azzaro Eau De Toilette Spray",
      price: "$36.95 - $92.95",
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Azzaro-Chrome-Mens-Eau-de-Toilette-Spray-6.8-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Main.jpg?v=1580828163",
    },
    {
      title: "AZZARO",
      description: "Azzaro Chrome For Men By Azzaro Eau De Toilette Spray",
      price: "$36.95 - $92.95",
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Azzaro-Chrome-Mens-Eau-de-Toilette-Spray-6.8-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Main.jpg?v=1580828163",
    },
    {
      title: "AZZARO",
      description: "Azzaro Chrome For Men By Azzaro Eau De Toilette Spray",
      price: "$36.95 - $92.95",
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Azzaro-Chrome-Mens-Eau-de-Toilette-Spray-6.8-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Main.jpg?v=1580828163",
    },
    {
      title: "AZZARO",
      description: "Azzaro Chrome For Men By Azzaro Eau De Toilette Spray",
      price: "$36.95 - $92.95",
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Azzaro-Chrome-Mens-Eau-de-Toilette-Spray-6.8-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Main.jpg?v=1580828163",
    },
    {
      title: "AZZARO",
      description: "Azzaro Chrome For Men By Azzaro Eau De Toilette Spray",
      price: "$36.95 - $92.95",
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Azzaro-Chrome-Mens-Eau-de-Toilette-Spray-6.8-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Main.jpg?v=1580828163",
    },
    {
      title: "AZZARO",
      description: "Azzaro Chrome For Men By Azzaro Eau De Toilette Spray",
      price: "$36.95 - $92.95",
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Azzaro-Chrome-Mens-Eau-de-Toilette-Spray-6.8-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Main.jpg?v=1580828163",
    },
    {
      title: "AZZARO",
      description: "Azzaro Chrome For Men By Azzaro Eau De Toilette Spray",
      price: "$36.95 - $92.95",
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Azzaro-Chrome-Mens-Eau-de-Toilette-Spray-6.8-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Main.jpg?v=1580828163",
    },
    {
      title: "AZZARO",
      description: "Azzaro Chrome For Men By Azzaro Eau De Toilette Spray",
      price: "$36.95 - $92.95",
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Burberry-Brit-Men-Eau-de-Toilette-1.6-Best-Price-Fragrance-Parfume-FragranceOutlet.com-MAIN.jpg?v=1649948781",
    },
    {
      title: "AZZARO",
      description: "Azzaro Chrome For Men By Azzaro Eau De Toilette Spray",
      price: "$36.95 - $92.95",
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Burberry-Brit-Men-Eau-de-Toilette-1.6-Best-Price-Fragrance-Parfume-FragranceOutlet.com-MAIN.jpg?v=1649948781",
    },
    {
      title: "AZZARO",
      description: "Azzaro Chrome For Men By Azzaro Eau De Toilette Spray",
      price: "$36.95 - $92.95",
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Burberry-Brit-Men-Eau-de-Toilette-1.6-Best-Price-Fragrance-Parfume-FragranceOutlet.com-MAIN.jpg?v=1649948781",
    },
    {
      title: "AZZARO",
      description: "Azzaro Chrome For Men By Azzaro Eau De Toilette Spray",
      price: "$36.95 - $92.95",
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Burberry-Brit-Men-Eau-de-Toilette-1.6-Best-Price-Fragrance-Parfume-FragranceOutlet.com-MAIN.jpg?v=1649948781",
    },
    {
      title: "AZZARO",
      description: "Azzaro Chrome For Men By Azzaro Eau De Toilette Spray",
      price: "$36.95 - $92.95",
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Burberry-Brit-Men-Eau-de-Toilette-1.6-Best-Price-Fragrance-Parfume-FragranceOutlet.com-MAIN.jpg?v=1649948781",
    },
    {
      title: "AZZARO",
      description: "Azzaro Chrome For Men By Azzaro Eau De Toilette Spray",
      price: "$36.95 - $92.95",
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Burberry-Brit-Men-Eau-de-Toilette-1.6-Best-Price-Fragrance-Parfume-FragranceOutlet.com-MAIN.jpg?v=1649948781",
    },
    {
      title: "AZZARO",
      description: "Azzaro Chrome For Men By Azzaro Eau De Toilette Spray",
      price: "$36.95 - $92.95",
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Burberry-Brit-Men-Eau-de-Toilette-1.6-Best-Price-Fragrance-Parfume-FragranceOutlet.com-MAIN.jpg?v=1649948781",
    },
    {
      title: "AZZARO",
      description: "Azzaro Chrome For Men By Azzaro Eau De Toilette Spray",
      price: "$36.95 - $92.95",
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Burberry-Brit-Men-Eau-de-Toilette-1.6-Best-Price-Fragrance-Parfume-FragranceOutlet.com-MAIN.jpg?v=1649948781",
    },
    {
      title: "AZZARO",
      description: "Azzaro Chrome For Men By Azzaro Eau De Toilette Spray",
      price: "$36.95 - $92.95",
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Burberry-Brit-Men-Eau-de-Toilette-1.6-Best-Price-Fragrance-Parfume-FragranceOutlet.com-MAIN.jpg?v=1649948781",
    },
    {
      title: "AZZARO",
      description: "Azzaro Chrome For Men By Azzaro Eau De Toilette Spray",
      price: "$36.95 - $92.95",
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Burberry-Brit-Men-Eau-de-Toilette-1.6-Best-Price-Fragrance-Parfume-FragranceOutlet.com-MAIN.jpg?v=1649948781",
    },
    {
      title: "AZZARO",
      description: "Azzaro Chrome For Men By Azzaro Eau De Toilette Spray",
      price: "$36.95 - $92.95",
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Burberry-Brit-Men-Eau-de-Toilette-1.6-Best-Price-Fragrance-Parfume-FragranceOutlet.com-MAIN.jpg?v=1649948781",
    },
    {
      title: "AZZARO",
      description: "Azzaro Chrome For Men By Azzaro Eau De Toilette Spray",
      price: "$36.95 - $92.95",
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Burberry-Brit-Men-Eau-de-Toilette-1.6-Best-Price-Fragrance-Parfume-FragranceOutlet.com-MAIN.jpg?v=1649948781",
    },
  ];

  const [isOpenSidebarMobile, setIsOpenSidebarMobile] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 12;

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = products.slice(firstPostIndex, lastPostIndex);

  console.log(currentPosts);
  return (
    <>
      {isOpenSidebarMobile && (
        <SideBarMobile
          onCloseSideBarMobile={() => {
            setIsOpenSidebarMobile(false);
          }}
        />
      )}

      <div className="mt-8 md:hidden">
        <button
          className="rounded bg-gray-200 h-8 w-14 flex items-center justify-center"
          onClick={() => setIsOpenSidebarMobile(true)}
        >
          Filter
        </button>
      </div>
      <div className=" -mr-4  pt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {currentPosts.map((product, i) => {
          return (
            <>
              <ProductItem key={i} product={product} />
            </>
          );
        })}
      </div>
      <Pagination
        totalPosts={products.length}
        postsPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default ProductList;
