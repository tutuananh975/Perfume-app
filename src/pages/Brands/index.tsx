import axios from "axios";
import { FC, useEffect, useState } from "react";

interface Brand {
    imgSrc: string
}


const Brands: FC = () => {

const [brands,setBrands] = useState<Brand[]>([])

useEffect(() => {
getBrandImg().then((data: Brand[]) => {
    console.log(data);
    
    setBrands(data)
})
},[])

async function getBrandImg()  {
let response = await axios.get('https://63f7976de40e087c95925720.mockapi.io/brand')
let reslut = response.data
console.log(reslut);
return reslut
}

   return (
    <div className="flex flex-wrap">
        {
            brands.map((brand) => {
                return (

                    <div className="px-6">
                        <img src={brand.imgSrc} alt="..." />
                    </div>
                )
            })
        }
    </div>
   )
  
}

export default Brands;