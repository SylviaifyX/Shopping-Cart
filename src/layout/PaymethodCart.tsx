
import { useCartStore } from "../store/UseCartStore"


const PaymentMethod = ({ paymentStatus, setPaymentStatus }: any) => {
    const { clearCart } = useCartStore((state) => state.actions)
    const reset = () => {
        clearCart()
        setPaymentStatus(null)
    }
    return (
        <>
            {paymentStatus &&
                <div className="mt-8 p-4 border border-gray-300 rounded-lg bg-gray-100 text-center">
                    <p className="text-lg font-semibold text-Rose900">{paymentStatus}</p>
                    <button className="mt-3 bg-Blue-500 text-white bg-Red p-2 rounded-md" onClick={reset}>
                        Start New Order
                    </button>
                </div>
            }
        </>

    )
}
export default PaymentMethod