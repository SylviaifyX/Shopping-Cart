import CartTable from "../components/CartTable";
import { useCartStore } from "../store/UseCartStore";
import PaymentMethod from "./PaymethodCart";
import { useState } from "react";
const CartSection = () => {

  const numberOfItemsInStore = useCartStore(state => state.numberOfItemsInStore)
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null)

  return (
    <section className="lg:ml-7 bg-white rounded-xl md:p-4 
     mt-10 lg:mt-0 lg:fixed 
     lg:right-0 lg:w-1/3 lg:max-h-screen
     lg:pb-12 lg:overflow-auto lg:p-6"
    >

      <div className="p-2 flex items-center gap-1">
        <h1 className="text-xl font-RedHatText text-red-700 font-bold">Your Cart</h1>
        <span className="text-xl  text-red-700 font-bold ">({numberOfItemsInStore})</span>
      </div>
      <div>
        {numberOfItemsInStore === 0 ? <div className="mt-5 p-2 ">
          <img src="/illustration-empty-cart.svg" alt="remove-icon" className="w-24 h-24 mx-auto mb-5" />
          <p className="text-base font-RedHatText text-Rose500 font-semibold text-center  pb-3 ">Your added item would appear here</p>
        </div>
          :
          <CartTable setPaymentStatus={setPaymentStatus} />
        }
        <PaymentMethod paymentStatus={paymentStatus} setPaymentStatus={setPaymentStatus}  />
      </div>
    </section>
  );
};
export default CartSection;
