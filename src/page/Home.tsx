import ProductSection from "../layout/ProductSection";
import CartSection from "../layout/CartSection";
import MainWrapper from "../layout/Wrapper";
import { useCartStore } from "../store/UseCartStore";
const HomePage = () => {
    const numberOfItemsInStore = useCartStore(state => state.numberOfItemsInStore)
    return (

        <MainWrapper>
            <div className="flex flex-col lg:flex-row items-start">
                <div className="w-full lg:w-2/3 ">
                    <div className="flex items-center justify-between sticky top-0 z-10 bg-Rose50">
                        <h1 className="text-[40px] font-RedHatText font-bold text-pink-950">Desserts</h1>
                        <a href="#cart" className="relative p-2 block md:hidden">
                            <img src="/icon-add-to-cart.svg" alt="cart-icon" />
                            <span
                                className="absolute bg-red-400 -bottom-1 -right-0 border
                             border-Rose900 p-2 text-white rounded-full
                              w-4 h-4 flex items-center justify-center text-xs"
                            >
                                {numberOfItemsInStore}
                            </span>
                        </a>
                    </div>

                    <ProductSection />
                </div>
                <div className="w-full lg:w-1/3">
                    <CartSection />
                </div>
            </div>
        </MainWrapper>
    );
};
export default HomePage;
