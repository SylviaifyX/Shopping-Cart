// import pic from "../assets/image-baklava-desktop.jpg";
import { useCartStore } from "../store/UseCartStore";
import { formatCurrency } from "../utilities/formatCurrency";

export type ProductCardProps = {
    id: string;
    name: string;
    category: string;
    image: string;
    price: number;
    quantity: number;
    subtotal: number;
};
const ProductCard = ({
    id,
    name,
    image,
    price,
    category,
    
}: ProductCardProps) => {
    const { addToCart, updateCart} = useCartStore((state) => state.actions);
    const cart = useCartStore((state) => state.cart)
    const quantity = cart[id]?.quantity || 0;

    const handleAddToCart = () => {
        if (quantity === 0) {
            addToCart({
                id,
                name,
                price,
                quantity: 1, 
                category,
                image,
                subtotal: price, 
            });
        } else {
            updateCart(id, 1);
        }
    };
    const handleIncrement = () => {
        updateCart(id, 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            updateCart(id, -1);
        }
    };
    return (
        <section className="mt-5 " data-aos="fade-up">
            <div className="mb-3 relative">
                <img
                    src={image}
                    alt="testing"
                    className="object-cover rounded-2xl  w-full overflow-hidden"
                    data-aos ="fade-in"
                />
                <div className="absolute -bottom-5 w-full h-10 flex justify-center items-center">
                    <div className="w-full flex items-center justify-center">{quantity === 0 ?
                        <button onClick={handleAddToCart} className="lg:w-44 w-full bg-slate-50  p-[10px] rounded-full border
                         border-Rose500 flex items-center justify-center gap-2 hover:border-Red hover:border-2">
                            <span>
                                <img src='/icon-add-to-cart.svg' alt="cart-icon" />
                            </span>
                            <span className="text-base font-RedHatText font-bold">Add to cart </span>
                        </button>
                        :
                        <button className="lg:w-44 w-full bg-Red  rounded-full border p-[10px] border-Rose500 ">
                            <div className="w-32 mx-auto flex items-center justify-between gap-2">
                                <div className="w-5 h-5 rounded-full border border-white flex items-center justify-center" onClick={handleDecrement}>
                                    <img src='/icon-decrement-quantity.svg' className="block object-cover" alt=""  />
                                </div>
                                <span className="text-white">{quantity}</span>
                                <span className="w-5 h-5 rounded-full border border-white flex items-center justify-center" onClick={handleIncrement}>
                                    <img src='/icon-increment-quantity.svg' alt="dec-icon" />
                                </span>
                            </div>

                        </button>}
                    </div>
                </div>
            </div>
            <div className=" mt-8 flex flex-col gap-2" data-aos="fade-left">
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
