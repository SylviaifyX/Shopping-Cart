
import dataItem from "../data/data.json"
import ProductCard from "../components/ProductCardSection"

const ProductSection = () =>{
    return(
        <section className="gird items-center">
            <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
                {dataItem.map((items) =>(
                    <div className="" key={items.id}>
                        <ProductCard {...items}  quantity={0} subtotal={items.price}/>
                        {/* {JSON.stringify(items)} */}
                    </div>
                ))}
            </div>
        </section>
    )
}
export default ProductSection