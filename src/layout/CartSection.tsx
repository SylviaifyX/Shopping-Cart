import CartTable from "../components/CartTable";

const CartSection = () => {
 
    return (
    <section className="ml-7 bg-white rounded-xl p-4">
      <div className="p-2 flex items-center gap-1">
        <h1 className="text-xl font-RedHatText text-red-700 font-bold">Your Cart</h1>
        <span className="text-xl  text-red-700 font-bold ">(0)</span>
      </div>
      <div>
        <div className="mt-5 p-2 hidden">
          <img src="/illustration-empty-cart.svg" alt="remove-icon"  className="w-24 h-24 mx-auto mb-5"/>
          <p className="text-base font-RedHatText text-Rose500 font-semibold text-center  pb-3 ">Your added item would appear here</p>
        </div>
        <CartTable/>
      </div>
    </section>
  );
};
export default CartSection;
