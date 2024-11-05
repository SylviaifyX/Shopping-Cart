import ProductSection from "../layout/ProductSection";
import CartSection from "../layout/CartSection";
import MainWrapper from "../layout/Wrapper";
const HomePage = () => {
    return (
        <MainWrapper>
            <div className="flex flex-col md:flex-row items-start">
                <div className="w-2/3">
                    <h1 className="text-[40px] font-RedHatText font-bold text-pink-950">Desserts</h1>
                    <ProductSection />

                </div>
                <div className="w-1/3">
                    <CartSection/>
                </div>
            </div>
        </MainWrapper>
    );
};
export default HomePage;
