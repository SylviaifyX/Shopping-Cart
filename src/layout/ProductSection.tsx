
import dataItem from "../data/data.json"
import ProductCard from "../components/ProductCardSection"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const ProductSection = () =>{
    useEffect(() =>{
        Aos.init({duration:900, offset:100, once: true, anchorPlacement: "top-bottom"  });
    },[])  
    return(
        <section className="gird items-center">
            <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
                {dataItem.map((items) =>(
                    <div className="" key={items.id} data-aos ="fade-up">
                        <ProductCard {...items}  quantity={0} subtotal={items.price}/>
                        {/* {JSON.stringify(items)} */}
                    </div>
                ))}
            </div>
        </section>
    )
}
export default ProductSection