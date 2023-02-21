import { FC, useState } from "react";
import Pagination from "../../components/Pagination";
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
  {
    "title": "AZZARO",
    "description": "Azzaro Chrome For Men By Azzaro Eau De Toilette Spray",
    "price": "$36.95 - $92.95",
    "imgUrl": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Burberry-Brit-Men-Eau-de-Toilette-1.6-Best-Price-Fragrance-Parfume-FragranceOutlet.com-MAIN.jpg?v=1649948781"
  },
  {
    "title": "AZZARO",
    "description": "Azzaro Chrome For Men By Azzaro Eau De Toilette Spray",
    "price": "$36.95 - $92.95",
    "imgUrl": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Burberry-Brit-Men-Eau-de-Toilette-1.6-Best-Price-Fragrance-Parfume-FragranceOutlet.com-MAIN.jpg?v=1649948781"
  },
  {
    "title": "AZZARO",
    "description": "Azzaro Chrome For Men By Azzaro Eau De Toilette Spray",
    "price": "$36.95 - $92.95",
    "imgUrl": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Burberry-Brit-Men-Eau-de-Toilette-1.6-Best-Price-Fragrance-Parfume-FragranceOutlet.com-MAIN.jpg?v=1649948781"
  },
  {
    "title": "AZZARO",
    "description": "Azzaro Chrome For Men By Azzaro Eau De Toilette Spray",
    "price": "$36.95 - $92.95",
    "imgUrl": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Burberry-Brit-Men-Eau-de-Toilette-1.6-Best-Price-Fragrance-Parfume-FragranceOutlet.com-MAIN.jpg?v=1649948781"
  },
  {
    "title": "AZZARO",
    "description": "Azzaro Chrome For Men By Azzaro Eau De Toilette Spray",
    "price": "$36.95 - $92.95",
    "imgUrl": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Burberry-Brit-Men-Eau-de-Toilette-1.6-Best-Price-Fragrance-Parfume-FragranceOutlet.com-MAIN.jpg?v=1649948781"
  },
  {
    "title": "AZZARO",
    "description": "Azzaro Chrome For Men By Azzaro Eau De Toilette Spray",
    "price": "$36.95 - $92.95",
    "imgUrl": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Burberry-Brit-Men-Eau-de-Toilette-1.6-Best-Price-Fragrance-Parfume-FragranceOutlet.com-MAIN.jpg?v=1649948781"
  },
  {
    "title": "AZZARO",
    "description": "Azzaro Chrome For Men By Azzaro Eau De Toilette Spray",
    "price": "$36.95 - $92.95",
    "imgUrl": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Burberry-Brit-Men-Eau-de-Toilette-1.6-Best-Price-Fragrance-Parfume-FragranceOutlet.com-MAIN.jpg?v=1649948781"
  },
  {
    "title": "AZZARO",
    "description": "Azzaro Chrome For Men By Azzaro Eau De Toilette Spray",
    "price": "$36.95 - $92.95",
    "imgUrl": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Burberry-Brit-Men-Eau-de-Toilette-1.6-Best-Price-Fragrance-Parfume-FragranceOutlet.com-MAIN.jpg?v=1649948781"
  },
  {
    "title": "AZZARO",
    "description": "Azzaro Chrome For Men By Azzaro Eau De Toilette Spray",
    "price": "$36.95 - $92.95",
    "imgUrl": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Burberry-Brit-Men-Eau-de-Toilette-1.6-Best-Price-Fragrance-Parfume-FragranceOutlet.com-MAIN.jpg?v=1649948781"
  },
  {
    "title": "AZZARO",
    "description": "Azzaro Chrome For Men By Azzaro Eau De Toilette Spray",
    "price": "$36.95 - $92.95",
    "imgUrl": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Burberry-Brit-Men-Eau-de-Toilette-1.6-Best-Price-Fragrance-Parfume-FragranceOutlet.com-MAIN.jpg?v=1649948781"
  },
  {
    "title": "AZZARO",
    "description": "Azzaro Chrome For Men By Azzaro Eau De Toilette Spray",
    "price": "$36.95 - $92.95",
    "imgUrl": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Burberry-Brit-Men-Eau-de-Toilette-1.6-Best-Price-Fragrance-Parfume-FragranceOutlet.com-MAIN.jpg?v=1649948781"
  },
  {
    "title": "AZZARO",
    "description": "Azzaro Chrome For Men By Azzaro Eau De Toilette Spray",
    "price": "$36.95 - $92.95",
    "imgUrl": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Burberry-Brit-Men-Eau-de-Toilette-1.6-Best-Price-Fragrance-Parfume-FragranceOutlet.com-MAIN.jpg?v=1649948781"
  },
  
];

const Men: FC = () => {

  const [reading, setReading] = useState<boolean>(false)


const [currentPage, setCurrentPage] = useState(1)
const [postPerPage, setPostPerPage] = useState(12)

const lastPostIndex = currentPage * postPerPage;
const firstPostIndex = lastPostIndex - postPerPage;
const currentPosts = products.slice(firstPostIndex, lastPostIndex);
console.log(currentPosts);


  return (
    <div className="max-w-[100%] px-4 pt-2 ">
    <div className='block border-b-1 pb-6 lg:grid grid-cols-6'>
      <img src="https://cdn.shopify.com/s/files/1/0269/7763/2389/files/collection_header_Men_Desktop.jpg" alt="..." className='mb-4 rounded-xl col-span-3 xl: col-span-4 '/>
      <div className={reading?"text-xs pl-6 pr-6 tracking-wider col-span-3 lg:col-span-2 text-scroll":"text-xs pl-6 pr-6 tracking-wider col-span-3 lg:col-span-2"}>There’s a new trend every year, but you don’t have to spend much time figuring it out. If you’re looking for what’s hot right now, then Perfumania has you covered with the best-selling men’s cologne. We stock the best scents from the greatest names in the business, and all of our top sellers are ready for you! From musk and woods to vibrant and
                {reading?
                <div>
                     fresh scents, Perfumania has it all. We’re here to make sure you smell your best, and we strive to deliver the best experience to every customer. Check out our best-selling colognes & fragrances for men, and see what discerning noses around the world are smelling right now!
                    <button className="border-b-2 border-black mx-3" onClick={()=>setReading(false)}>Read less</button>
                </div>
                :   
                <div>
                    <button className="border-b-2 border-black mx-3" onClick={()=>setReading(true)}>Read more</button>
                </div>}
                </div>
                </div>
      
    <hr />
        <div className=" -mr-4  pt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
       {
       currentPosts.map((product, i) => {
          return (
            <>
            <ProductItem key={i} product={product} />
            
            </>
          )
        })
       }
        </div>
       <Pagination totalPosts={products.length} postsPerPage={postPerPage} setCurrentPage={setCurrentPage}/>
    </div>

      )}


export default Men;

