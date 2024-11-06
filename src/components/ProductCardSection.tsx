// import pic from "../assets/image-baklava-desktop.jpg";
import { useCartStore } from "../store/UseCartStore";
import { formatCurrency } from "../utilities/formatCurrency";

export type ProductCardProps = {
    id: number;
    name: string;
    category: string;
    image: string;
    price: number;
    quantity: number
};
const ProductCard = ({
    id,
    name,
    image,
    price,
    category,
}: ProductCardProps) => {
    const {addToCart} = useCartStore ((state) => state.actions);
    const cart = useCartStore((state) => state.cart)
    const quantity = cart[id]?.quantity || 0;

    const handleAddToCart = () => {
        addToCart({
            id, name, price, quantity: quantity + 1,
            category: "",
            image: ""
        });
    };
    return (
        <section className="mt-5">
            <div className="mb-3 relative">
                <img
                    src={image}
                    alt="testing"
                    className="object-cover rounded-2xl  overflow-hidden"
                />
                <div className="absolute inset-0  h-10  top-52  flex justify-center items-center">
                    <div className="">{ quantity === 0?
                        <button onClick={handleAddToCart} className="w-44 bg-slate-50 p-2 rounded-full border
                         border-Rose500 flex items-center justify-center gap-2 hover:border-Red hover:border-2">
                            <span>
                                <img src='/icon-add-to-cart.svg' alt="cart-icon" />
                            </span>
                            <span className="text-base font-RedHatText font-bold">Add to cart </span>
                        </button>
                        :
                        <button className="w-44 bg-Red p-2 rounded-full border border-Rose500 ">
                            <div className="w-32 mx-auto flex items-center justify-between gap-2">
                                <div className="w-5 h-5 rounded-full border border-white flex items-center justify-center">
                                    <img src='/icon-decrement-quantity.svg' className="block object-cover" alt="" />
                                </div>
                                <span className="text-white">1</span>
                                <span className="w-5 h-5 rounded-full border border-white flex items-center justify-center">
                                    <img src='/icon-increment-quantity.svg' alt="dec-icon" />
                                </span>
                            </div>

                        </button>}
                    </div>
                </div>
            </div>
            <div className=" mt-8 flex flex-col gap-2">
                <p className="text-sm font-RedHatText text-Rose500 font-medium ">
                    {category}
                </p>
                <h2 className="text-base font-RedHatText font-bold text-red-950">
                    {name}
                </h2>
                <h2 className="text-base font-RedHatText font-bold text-red-700">
                    {formatCurrency(price)}
                </h2>
            </div>
        </section>
    );
};

export default ProductCard;
