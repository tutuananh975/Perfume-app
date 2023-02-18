import { FC } from "react";
import Image from "../../components/Image";
import { AiOutlineClose } from "react-icons/ai";

interface ProductProp {
  alt: string;
  src: string;
  name: string;
  desc: string;
  size: string;
  retailPrice: number;
  ourPrice: number;
  amount: number;
}

const ProductCart: FC<ProductProp> = ({
  alt,
  src,
  name,
  desc,
  size,
  retailPrice,
  ourPrice,
  amount,
}) => {
  return (
    <div className="flex py-8 items-center border-b border-solid border-slate-300">
      <div className="product-cart-img mr-12">
        <Image src={src} alt={alt} w="135px" h="135px" />
      </div>
      <div className=" w-1/5">
        <h2 className="text-lg uppercase font-semibold leading-6">{name}</h2>
        <p className=" text-base font-extralight mt-2">{desc}</p>
        <p className="mt-1 text-base font-extralight">{size}</p>
      </div>
      <div className="ml-14 font-normal text-base leading-tight">
        <h3 className="text-gray-400 mb-2 line-through">
          Retail Price ${retailPrice}
        </h3>
        <h3>Our Price ${ourPrice}</h3>
      </div>
      <div className="flex ml-auto">
        <div
          className="flex justify-center items-center w-7 h-7 cursor-pointer border border-slate-300 mr-3"
          style={{
            borderRadius: "50%",
          }}
        >
          <span
            style={{
              position: "relative",
              top: "-2px",
            }}
          >
            -
          </span>
        </div>
        <span>{amount}</span>
        <div
          className="flex justify-center items-center w-7 h-7 cursor-pointer border border-slate-300 ml-3 bg-black"
          style={{
            borderRadius: "50%",
          }}
        >
          <span
            className="text-white relative"
            style={{
              top: "-2px",
            }}
          >
            +
          </span>
        </div>
      </div>
      <div className="flex items-center ml-auto">
        <h4 className="mr-12 text-lg font-semibold leading-5">${ourPrice * amount}</h4>
        <AiOutlineClose className="mr-4"/>
      </div>
    </div>
  );
};

export default ProductCart;
