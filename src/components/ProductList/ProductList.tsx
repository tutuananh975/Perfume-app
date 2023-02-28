import { FC, useState } from "react";
import ProductItem from "../ProductItem";
import Pagination from "../Pagination";
import SideBarMobile from "../layouts/MainLayout/SideBarMobile";


interface Product {
  imgSrc: string,
  name: string,
  desc: string,
  sex: string,
  retailPrice:number,
  ourPrice: number,
  id: any,
}

type Props = {
  products : Product[],
  btnEdit? : boolean,
  isNavigate: boolean
}
const ProductList: FC<Props> = ({products,btnEdit, isNavigate}) => {

  const [isOpenSidebarMobile, setIsOpenSidebarMobile] = useState(false);
  const [isOpenSortBar, setIsOpenSortBar] = useState(false)

  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 12;

  const lastProductIndex = currentPage * productPerPage;
  const firstProductIndex = lastProductIndex - productPerPage ;
 
 
  return (
    <>
      {isOpenSidebarMobile && (
        <SideBarMobile
          onCloseSideBarMobile={() => {
            setIsOpenSidebarMobile(false);
          }}
        />
      )}

      <div className="mt-8 flex justify-end relative">
        <button
          className="mr-auto rounded bg-gray-200 h-8 w-14 flex items-center justify-center md:hidden"
          onClick={() => setIsOpenSidebarMobile(true)}
        >
          Filter
        </button>

        <button
          className="rounded bg-gray-200 h-8 w-14 flex items-center justify-center"
          onClick={() => {setIsOpenSortBar(!isOpenSortBar)}}
        >
          Sort
        </button>
        <div className={isOpenSortBar? "absolute w-36 h-28 right-0 top-8 bg-white shadow-lg" : "hidden"}>
          <ul className="">
            <li className=" hover:bg-gray-200 cursor-pointer px-2 py-1 text-sm" onClick={() => {
              products = products.sort((a,b) => a.ourPrice - b.ourPrice)
              setIsOpenSortBar(!isOpenSortBar)
            }}
            >Price, low to high</li>
            <li className=" hover:bg-gray-200 cursor-pointer px-2 py-1 text-sm" onClick={() => {
              products = products.sort((a,b) => b.ourPrice - a.ourPrice)
              setIsOpenSortBar(!isOpenSortBar)
            }}>Price, high to low</li>
            <li className=" hover:bg-gray-200 cursor-pointer px-2 py-1 text-sm" onClick={() => {
              products = products.sort((a,b) => a.name.localeCompare(b.name))
              setIsOpenSortBar(!isOpenSortBar)
            }}>Alphabetically, A-Z</li>
            <li className=" hover:bg-gray-200 cursor-pointer px-2 py-1 text-sm" onClick={() => {
              products = products.sort((a,b) => b.name.localeCompare(a.name))
              setIsOpenSortBar(!isOpenSortBar)
            }}>Alphabetically, Z-A</li>
          </ul>
        </div>
      </div>
      <div className=" -mr-4  pt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {
        products.slice(firstProductIndex, lastProductIndex).map((product) => {
          return (
              <ProductItem key={product.id} product={product} btnEdit={btnEdit} isNavigate = {isNavigate} />
          );
        })}
      </div>
      <Pagination
        totalProducts={products.length}
        productsPerPage={productPerPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default ProductList;

// [
//   {
//     "imgSrc": "https://marvel-b1-cdn.bc0a.com/f00000000246772/cdn.shopify.com/s/files/1/0269/7763/2389/products/Azzaro-Chrome-Mens-Eau-de-Toilette-Spray-3.4-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details.jpg?v=1579123544&width=1946",
//     "name": "AZZARO",
//     "desc": "Azzaro Chrome For Men By Azzaro Eau De Toilette Spray",
//     "retailPrice": "98.00",
//     "ourPrice": "72.95",
//     "sex": "men",
//     "id": "1" 
//   },{
//     "imgSrc": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/M-1838larger.jpg?v=1649948781",
//     "name": "BURBERRY",
//     "desc": "Burberry Brit For Men By Burberry Eau De Toilette Spray",
//     "retailPrice": "54.00",
//     "ourPrice": "23.85",
//     "sex": "men",
//     "id": "2" 
//   },{
//     "imgSrc": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Versace-Man-Eau-Fraiche-Mens-Eau-de-Toilette-Spray-1-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details.jpg?v=1579124490",
//     "name": "VERSACE",
//     "desc": "Man Eau Fraiche Eau de Toilette Spray for Men by Versace",
//     "retailPrice": "55.00",
//     "ourPrice": "44.95",
//     "sex": "men",
//     "id": "3" 
//   },{
//     "imgSrc": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Calvin-Klein-Obsession-Mens-Eau-de-Toilette-Spray-4-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details.jpg?v=1580827686",
//     "name": "CALVIN KLEIN",
//     "desc": "Obsession For Men By Calvin Klein Eau De Toilette Spray",
//     "retailPrice": "86.00",
//     "ourPrice": "63.95",
//     "sex": "men",
//     "id": "4" 
//   },{
//     "imgSrc": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Versace-Pour-Homme-Mens-Eau-de-Toilette-Spray-1-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details.jpg?v=1579124475",
//     "name": "VERSACE",
//     "desc": "Versace Pour Homme For Men By Gianni Versace Eau De Toilette Spray",
//     "retailPrice": "55.00",
//     "ourPrice": "44.95",
//     "sex": "men",
//     "id": "5" 
//   },{
//     "imgSrc": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Ralph-Lauren-Polo-Blue-Mens-Eau-de-Toilette-Spray-2.5-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details.jpg?v=1580141334",
//     "name": "RALPH LAUREN",
//     "desc": "Polo Blue For Men By Ralph Lauren Eau De Toilette Spray",
//     "retailPrice": "82.00",
//     "ourPrice": "69.95",
//     "sex": "men",
//     "id": "6" 
//   },{
//     "imgSrc": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Issey-Miyake-Issey-Miyake-Mens-Eau-De-Toilette-EDT-Spray-1.3-oz.-Best-Price-Fragrance-Parfume-FragranceOutlet.com-DETAILS.jpg?v=1579124286",
//     "name": "ISSEY MIYAKE",
//     "desc": "L'Eau D'issey Pour Homme For Men By Issey Miyake Eau De Toilette Spray",
//     "retailPrice": "58.00",
//     "ourPrice": "42.95",
//     "sex": "men",
//     "id": "7" 
//   },{
//     "imgSrc": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Ralph-Lauren-Polo-Black-Mens-Eau-de-Toilette-Spray-2.5-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details.jpg?v=1579124412",
//     "name": "RALPH LAUREN",
//     "desc": "Polo Black Eau de Toilette Spray for Men by Ralph Lauren",
//     "retailPrice": "82.00",
//     "ourPrice": "69.95",
//     "sex": "men",
//     "id": "8" 
//   },{
//     "imgSrc": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Calvin-Klein-Eternity-Aqua-Mens-Eau-de-Toilette-Spray-1-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details.jpg?v=1579124114",
//     "name": "CALVIN KLEIN",
//     "desc": "Eternity Aqua Eau de Toilette Spray for Men by Calvin Klein",
//     "retailPrice": "45.00",
//     "ourPrice": "29.95",
//     "sex": "men",
//     "id": "9" 
//   },{
//     "imgSrc": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Joop-Homme-Mens-Eau-de-Toilette-Spray-2.5-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details_5f37f75b-8cba-4a3c-86f9-b40512954311.jpg?v=1580825591",
//     "name": "JOOP",
//     "desc": "Joop! Homme For Men By Joop! Eau De Toilette Spray",
//     "retailPrice": "50.00",
//     "ourPrice": "34.95",
//     "sex": "men",
//     "id": "10" 
//   },{
//     "imgSrc": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Kenneth-Cole-Mankind-Mens-Eau-de-Toilette-Spray-3.4-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Detail.jpg?v=1625165197",
//     "name": "KENNETH COLE",
//     "desc": "Mankind Eau de Toilette Spray for Men by Kenneth Cole",
//     "retailPrice": "70.00",
//     "ourPrice": "39.95",
//     "sex": "men",
//     "id": "11" 
//   },{
//     "imgSrc": "https://marvel-b1-cdn.bc0a.com/f00000000246772/cdn.shopify.com/s/files/1/0269/7763/2389/products/Hugo-Boss-Boss-Bottled-Night-Men-Eau-de-Toilette-Spray-EDT-Spray-6.7-Best-Price-Fragrance-Perfume-FragranceOutlet.com-DETAILS.jpg?v=1598975722",
//     "name": "HUGO BOSS",
//     "desc": "Boss Bottled Night For Men By Hugo Boss Eau De Toilette Spray",
//     "retailPrice": "128.00",
//     "ourPrice": "94.95",
//     "sex": "men",
//     "id": "12" 
//   },{
//     "imgSrc": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Claiborne-Curve-Mens-Cologne-4.2-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details.jpg?v=1579123730",
//     "name": "CLAIBORNE",
//     "desc": "Curve Cologne Spray for Men by Claiborne",
//     "retailPrice": "55.00",
//     "ourPrice": "29.99",
//     "sex": "men",
//     "id": "13" 
//   },{
//     "imgSrc": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Ralph-Lauren-Polo-Sport-Mens-Eau-De-Toilette-Spray-EDT-S-2.5-oz.-Best-Price-Fragrance-Perfume-FragranceOutlet.com-Details.jpg?v=1606488952",
//     "name": "RALPH LAUREN",
//     "desc": "Polo Sport Eau de Toilette Spray for Men by Ralph Lauren",
//     "retailPrice": "56.00",
//     "ourPrice": "46.95",
//     "sex": "men",
//     "id": "14" 
//   },{
//     "imgSrc": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Dolce-_-Gabanna-K-Men-Eau-de-Toilette-3.3-Best-Price-Fragrance-Parfume-FragranceOutlet.com_6a5cce09-69ce-4adc-a9bf-e3de9ad35931.jpg?v=1617654592",
//     "name": "D&G",
//     "desc": "K Eau de Toilette Spray for Men by D&G",
//     "retailPrice": "78.00",
//     "ourPrice": "64.95",
//     "sex": "men",
//     "id": "15" 
//   },{
//     "imgSrc": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Jean-Paul-Gaultier-Jean-Paul-Gaultier-Mens-Eau-de-Toilette-Spray-2.5-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details.jpg?v=1579123918",
//     "name": "JEAN PAUL GAULTIER",
//     "desc": "Jean Paul Gaultier Le Male Eau de Toilette Spray for Men by Jean Paul Gaultier",
//     "retailPrice": "78.00",
//     "ourPrice": "64.95",
//     "sex": "men",
//     "id": "16" 
//   },{
//     "imgSrc": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Kennet-Cole-Kenneth-Cole-Black-Mens-Eau-de-Toilette-Spray-3.4-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details.jpg?v=1619632958",
//     "name": "KENNETH COLE",
//     "desc": "Kenneth Cole Black Eau de Toilette Spray for Men by Kenneth Cole",
//     "retailPrice": "85.00",
//     "ourPrice": "59.95",
//     "sex": "men",
//     "id": "17" 
//   },{
//     "imgSrc": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Montblanc-Presence-Mens-Eau-de-Toilette-Spray-2.5-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details.jpg?v=1580142951",
//     "name": "MONTBLANC",
//     "desc": "Mont Blanc Presence For Men By Mont Blanc Eau De Toilette Spray",
//     "retailPrice": "70.00",
//     "ourPrice": "39.95",
//     "sex": "men",
//     "id": "18" 
//   },{
//     "imgSrc": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/M-2709larger.jpg?v=1667483650",
//     "name": "BURBERRY",
//     "desc": "Burberry New London For Men By Burberry Eau De Toilette Spray",
//     "retailPrice": "51.00",
//     "ourPrice": "22.31",
//     "sex": "men",
//     "id": "19" 
//   },{
//     "imgSrc": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Davidoff-Cool-Water-Mens-Eau-de-Toilette-Spray-4.2-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details.jpg?v=1580827167",
//     "name": "DAVIDOFF",
//     "desc": "Cool Water For Men By Davidoff Eau De Toilette Spray",
//     "retailPrice": "77.00",
//     "ourPrice": "64.95",
//     "sex": "men",
//     "id": "20" 
//   },{
//     "imgSrc": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Versace-Dylan-Blue-Men-Eau-de-Toilette-1_7-Best-Price-Fragrance-Parfume-FragranceOutlet_com-main_jpeg.jpg?v=1579126537",
//     "name": "VERSACE",
//     "desc": "Dylan Blue For Men By Gianni Versace Eau De Toilette Spray",
//     "retailPrice": "72.00",
//     "ourPrice": "58.95",
//     "sex": "men",
//     "id": "21" 
//   },{
//     "imgSrc": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Calvin-Klein-Be-Mens-Eau-de-Toilette-Spray-1.7-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details.jpg?v=1579124084",
//     "name": "CALVIN KLEIN",
//     "desc": "Be Eau de Toilette Spray for Men by Calvin Klein",
//     "retailPrice": "43.00",
//     "ourPrice": "29.95",
//     "sex": "men",
//     "id": "22" 
//   },{
//     "imgSrc": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Yves-Saint-Laurent-L-Homme-Mens-Eau-de-Toilette-Spray-2-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details.jpg?v=1579124514",
//     "name": "YVES SAINT LAURENT",
//     "desc": "L'Homme Eau de Toilette Spray for Men by Yves Saint Laurent",
//     "retailPrice": "80.00",
//     "ourPrice": "67.95",
//     "sex": "men",
//     "id": "23" 
//   },{
//     "imgSrc": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Burberry-Brit-Women-Eau-de-Parfum-1.6-Best-Price-Fragrance-Parfume-FragranceOutlet.com-DETAILS.jpg?v=1591879601",
//     "name": "BURBERRY",
//     "desc": "Burberry Brit For Women By Burberry Eau De Parfum Spray",
//     "retailPrice": "85.00",
//     "ourPrice": "62.95",
//     "sex": "women",
//     "id": "24" 
//   },{
//     "imgSrc": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Ralph-Lauren-Romance-Womens-Eau-de-Parfume-Spray-1-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details.jpg?v=1579124877",
//     "name": "RALPH LAUREN",
//     "desc": "Romance Eau de Parfum Spray for Women by Ralph Lauren",
//     "retailPrice": "58.00",
//     "ourPrice": "52.99",
//     "sex": "women",
//     "id": "25" 
//   },{
//     "imgSrc": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Clinique-Happy-Women-Eau-de-Parfume-Spray-1-Best-Price-Fragrance-Parfume-Details.jpg?v=1579125131",
//     "name": "CLINIQUE",
//     "desc": "Happy Eau de Parfum Spray for Women by Clinique",
//     "retailPrice": "47.00",
//     "ourPrice": "38.95",
//     "sex": "women",
//     "id": "26" 
//   },{
//     "imgSrc": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/3610477.jpg?v=1659019314",
//     "name": "DAVIDOFF",
//     "desc": "Cool Water For Women By Davidoff Eau De Toilette Spray",
//     "retailPrice": "29.00",
//     "ourPrice": "32.95",
//     "sex": "women",
//     "id": "27" 
//   },{
//     "imgSrc": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Jessica-Simpson-Fancy-Womens-Eau-de-Parfume-Spray-3.4-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details.jpg?v=1579723515",
//     "name": "JESSICA SIMPSON",
//     "desc": "Fancy For Women By Jessica Simpson Eau De Parfum Spray",
//     "retailPrice": "61.00",
//     "ourPrice": "39.95",
//     "sex": "women",
//     "id": "28" 
//   },{
//     "imgSrc": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Perry-Ellis-360-Womens-Eau-de-Toilette-Spray-1.7-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details.jpg?v=1579123873",
//     "name": "PERRY ELLIS",
//     "desc": "360° Eau de Toilette Spray for Women by Perry Ellis",
//     "retailPrice": "50.00",
//     "ourPrice": "35.95",
//     "sex": "women",
//     "id": "29" 
//   },{
//     "imgSrc": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Britney-Spears-Fantasy-Womens-Eau-de-Parfume-Spray-3.4-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details.jpg?v=1579880405",
//     "name": "BRITNEY SPEARS",
//     "desc": "Fantasy For Women By Britney Spears Eau De Parfum Spray",
//     "retailPrice": "52.00",
//     "ourPrice": "47.95",
//     "sex": "women",
//     "id": "30" 
//   },{
//     "imgSrc": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Hugo-Boss-Femme-Women-Eau-de-Parfume-Spray-1.6-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details.jpg?v=1598973795",
//     "name": "HUGO BOSS",
//     "desc": "Femme Eau de Parfum Spray for Women by Hugo Boss",
//     "retailPrice": "66.00",
//     "ourPrice": "39.99",
//     "sex": "women",
//     "id": "31" 
//   },{
//     "imgSrc": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/W-9254larger.jpg?v=1580913016",
//     "name": "VINCE CAMUTO",
//     "desc": "Capri For Women By Vince Camuto Eau De Parfum Spray",
//     "retailPrice": "90.00",
//     "ourPrice": "69.95",
//     "sex": "women",
//     "id": "32" 
//   },{
//     "imgSrc": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/W-9304larger.jpg?v=1580912085",
//     "name": "PARIS HILTON",
//     "desc": "Gold Rush Paris Hilton For Women Eau De Parfum Spray",
//     "retailPrice": "65.00",
//     "ourPrice": "39.95",
//     "sex": "women",
//     "id": "33" 
//   },{
//     "imgSrc": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Calvin-Klein-Beauty-Womens-Eau-de-Parfume-Spray-3.4-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details.jpg?v=1631726389",
//     "name": "CALVIN KLEIN",
//     "desc": "Beauty Eau de Parfum Spray for Women by Calvin Klein",
//     "retailPrice": "54.00",
//     "ourPrice": "20.95",
//     "sex": "women",
//     "id": "34" 
//   },{
//     "imgSrc": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/W-1518larger.jpg?v=1635787164",
//     "name": "REVLON",
//     "desc": "Ciara For Women By Revlon Eau de Parfum Spray",
//     "retailPrice": "33.50",
//     "ourPrice": "12.99",
//     "sex": "women",
//     "id": "35" 
//   },{
//     "imgSrc": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Cacharel-Anais-Anais-Women-Eau-de-Toilette-Spray-1-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details.jpg?v=1579123703",
//     "name": "CACHAREL",
//     "desc": "Anais Anais Eau de Toilette Spray for Women by Cacharel",
//     "retailPrice": "40.00",
//     "ourPrice": "28.77",
//     "sex": "women",
//     "id": "36" 
//   },{
//     "imgSrc": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/TommyBahamaVeryCoolbyTommyBahamaforWomen.jpg?v=1591802041",
//     "name": "TOMMY BAHAMA",
//     "desc": "Tommy Bahama Very Cool by Tommy Bahama for Women",
//     "retailPrice": "62.00",
//     "ourPrice": "49.95",
//     "sex": "women",
//     "id": "37" 
//   },{
//     "imgSrc": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/StKittsbyTommyBahamaforWomen.jpg?v=1591802054",
//     "name": "TOMMY BAHAMA",
//     "desc": "St Kitts by Tommy Bahama for Women",
//     "retailPrice": "75.00",
//     "ourPrice": "49.95",
//     "sex": "women",
//     "id": "38" 
//   },{
//     "imgSrc": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/TommyBahamaSetSailMartiniquebyTommyBahamaforWomen.jpg?v=1591802047",
//     "name": "TOMMY BAHAMA",
//     "desc": "Tommy Bahama Set Sail Martinique by Tommy Bahama for Women",
//     "retailPrice": "72.00",
//     "ourPrice": "49.95",
//     "sex": "women",
//     "id": "39" 
//   },{
//     "imgSrc": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/W-1069larger.jpg?v=1579128173",
//     "name": "ALFRED SUNG",
//     "desc": "Forever by Alfred Sung for Women - Eau De Parfum Spray",
//     "retailPrice": "65.00",
//     "ourPrice": "34.95",
//     "sex": "women",
//     "id": "40" 
//   },{
//     "imgSrc": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/I0088528larger.jpg?v=1602016502",
//     "name": "BODYBLENDZ",
//     "desc": "2-In-1 Mask and Scrub Exfoliating Capsules by BodyBlendz for Women - 8 x 10 ml Exfoliator",
//     "retailPrice": "30.00",
//     "ourPrice": "15.39",
//     "sex": "women",
//     "id": "41" 
//   },{
//     "imgSrc": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/I0115884larger.jpg?v=1625603200",
//     "name": "GIORGIO ARMANI",
//     "desc": "My Way by Giorgio Armani for Women - EDP Spray",
//     "retailPrice": "112.95",
//     "ourPrice": "96.95",
//     "sex": "women",
//     "id": "42" 
//   },{
//     "imgSrc": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/I0106584larger.jpg?v=1600978417",
//     "name": "VILLA FLORIANI",
//     "desc": "Intensive Hydrating Serum - Aloe by Villa Floriani for Women - 1 oz Serum",
//     "retailPrice": "98.00",
//     "ourPrice": "61.95",
//     "sex": "women",
//     "id": "43" 
//   },{
//     "imgSrc": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/D_G-Light-Blue-Women-Eau-de-Toilette-Spray-0.84-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details-Box.jpg?v=1580142818",
//     "name": "DOLCE AND GABBANA",
//     "desc": "Light Blue For Women By Dolce & Gabbana Eau De Toilette Spray",
//     "retailPrice": "62.00",
//     "ourPrice": "51.95",
//     "sex": "women",
//     "id": "44" 
//   },{
//     "imgSrc": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Lancome-Vie-Est-Belle-Womens-Eau-de-Parfume-Spray-1.7-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details.jpg?v=1638285517",
//     "name": "LANCOME",
//     "desc": "La Vie Est Belle For Women By Lancome Eau De Parfum Spray",
//     "retailPrice": "77.00",
//     "ourPrice": "73.95",
//     "sex": "women",
//     "id": "45" 
//   },{
//     "imgSrc": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/W-1308larger.jpg?v=1668197535",
//     "name": "BURBERRY",
//     "desc": "Burberry For Women By Burberry Eau De Parfum Spray",
//     "retailPrice": "61.00",
//     "ourPrice": "44.95",
//     "sex": "women",
//     "id": "46" 
//   }
// ]