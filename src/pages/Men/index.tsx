import { FC } from "react";
import ProductItem from "../../components/ProductItem";


const products = [
  {
    "title": "AZZARO",
    "description": "Azzaro Chrome For Men By Azzaro Eau De Toilette Spray",
    "price": "$36.95 - $92.95",
    "imgUrl": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Azzaro-Chrome-Mens-Eau-de-Toilette-Spray-6.8-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Main.jpg?v=1580828163"
  },
  {
    "title": "AZZARO",
    "description": "Azzaro Chrome For Men By Azzaro Eau De Toilette Spray",
    "price": "$36.95 - $92.95",
    "imgUrl": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Azzaro-Chrome-Mens-Eau-de-Toilette-Spray-6.8-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Main.jpg?v=1580828163"
  },
  {
    "title": "AZZARO",
    "description": "Azzaro Chrome For Men By Azzaro Eau De Toilette Spray",
    "price": "$36.95 - $92.95",
    "imgUrl": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Azzaro-Chrome-Mens-Eau-de-Toilette-Spray-6.8-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Main.jpg?v=1580828163"
  },
  {
    "title": "AZZARO",
    "description": "Azzaro Chrome For Men By Azzaro Eau De Toilette Spray",
    "price": "$36.95 - $92.95",
    "imgUrl": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Azzaro-Chrome-Mens-Eau-de-Toilette-Spray-6.8-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Main.jpg?v=1580828163"
  },
  {
    "title": "AZZARO",
    "description": "Azzaro Chrome For Men By Azzaro Eau De Toilette Spray",
    "price": "$36.95 - $92.95",
    "imgUrl": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Azzaro-Chrome-Mens-Eau-de-Toilette-Spray-6.8-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Main.jpg?v=1580828163"
  },
  {
    "title": "AZZARO",
    "description": "Azzaro Chrome For Men By Azzaro Eau De Toilette Spray",
    "price": "$36.95 - $92.95",
    "imgUrl": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Azzaro-Chrome-Mens-Eau-de-Toilette-Spray-6.8-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Main.jpg?v=1580828163"
  },
  {
    "title": "AZZARO",
    "description": "Azzaro Chrome For Men By Azzaro Eau De Toilette Spray",
    "price": "$36.95 - $92.95",
    "imgUrl": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Azzaro-Chrome-Mens-Eau-de-Toilette-Spray-6.8-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Main.jpg?v=1580828163"
  },
  {
    "title": "AZZARO",
    "description": "Azzaro Chrome For Men By Azzaro Eau De Toilette Spray",
    "price": "$36.95 - $92.95",
    "imgUrl": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Azzaro-Chrome-Mens-Eau-de-Toilette-Spray-6.8-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Main.jpg?v=1580828163"
  },
  {
    "title": "AZZARO",
    "description": "Azzaro Chrome For Men By Azzaro Eau De Toilette Spray",
    "price": "$36.95 - $92.95",
    "imgUrl": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Azzaro-Chrome-Mens-Eau-de-Toilette-Spray-6.8-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Main.jpg?v=1580828163"
  },
  {
    "title": "AZZARO",
    "description": "Azzaro Chrome For Men By Azzaro Eau De Toilette Spray",
    "price": "$36.95 - $92.95",
    "imgUrl": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Azzaro-Chrome-Mens-Eau-de-Toilette-Spray-6.8-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Main.jpg?v=1580828163"
  },
  {
    "title": "AZZARO",
    "description": "Azzaro Chrome For Men By Azzaro Eau De Toilette Spray",
    "price": "$36.95 - $92.95",
    "imgUrl": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Azzaro-Chrome-Mens-Eau-de-Toilette-Spray-6.8-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Main.jpg?v=1580828163"
  },
  {
    "title": "AZZARO",
    "description": "Azzaro Chrome For Men By Azzaro Eau De Toilette Spray",
    "price": "$36.95 - $92.95",
    "imgUrl": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Azzaro-Chrome-Mens-Eau-de-Toilette-Spray-6.8-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Main.jpg?v=1580828163"
  },
  
];

const Men: FC = () => {
  return (
    <div className="max-w-[100%] px-4 pt-2">
    <div className='flex flex-[1_1_65%] h-[300px] border-b-1 pb-6'>
      <img src="https://cdn.shopify.com/s/files/1/0269/7763/2389/files/collection_header_Men_Desktop.jpg" alt="..." className='w-[700px] object-fill object-center rounded-xl mx-w-[719px]'/>
      <p className="text-xs pl-6 pr-6 tracking-wider">There’s a new trend every year, but you don’t have to spend much time figuring it out. If you’re looking for what’s hot right now, then 
      Perfumania has you covered with the best-selling men’s cologne. We stock the best scents from the greatest names in the business, and all of our top sellers are ready for you! From musk 
      and woods to vibrant an</p>
    </div>
    <hr />
        <div className="flex flex-wrap -mr-4  pt-12 ">
       {
        products.map((product, i) => {
          return (
            <ProductItem key={i} product={product}/>
          )
        })
       }
        </div>
    </div>

      )}


export default Men;

