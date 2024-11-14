import { useCartStore } from "../store/UseCartStore";
import { formatCurrency } from "../utilities/formatCurrency";
import PaystackPop from "@paystack/inline-js"

export type PaystackProp = {
    key: string,
    amount: number,
    onSuccess?: (transaction: { reference: string }) => void,
    onCancel?: () => void,
}
const CartTable = () => {
    const cart = useCartStore((state) => state.cart);
    const { subTotalCalculation, removeFromCart } = useCartStore((state) => state.actions)
    const subtotal = subTotalCalculation()

    const handleRemoveItem = (id: string) => {
        removeFromCart(id)
    }

    const paywithpaystack = (e: React.FormEvent) => {
        e.preventDefault();
        const paystack = new PaystackPop();
        paystack.newTransaction({
            key: "pk_test_53f92e45d000087eb0939faab47372a3f70d1ef8",
            amount: subtotal * 100,
            onSuccess: (transaction) => {
                alert(`Payment complete! Reference: ${transaction.reference}`);
            },
            onCancel: () => {
                alert("Payment was cancelled.");
            },
            email: "testing@gmail.com"
        });
    };

    return (
        <div className="w-full p-3">
            <table className="">
                <tbody className="flex flex-col gap-5">
                    {Object.keys(cart).map((id) => {
                        const { name, image, price, quantity } = cart[id];
                        return (
                            <tr key={id} className="font-RedHatText border-b border-Rose100">
                                <td className="w-1/6 overflow-hidden">
                                    <img
                                        src={image}
                                        alt={name}
                                        className="w-full object-cover rounded"
                                    />
                                </td>
                                <td className="text-Red font-bold text-base w-1/4 text-center p-2">{quantity}x</td>
                                <td className="text-Rose400 font-medium w-1/4 text-center">@ {formatCurrency(price)}</td>
                                <td className="text-Rose500 font-semibold w-1/4 text-center p-2">{formatCurrency(price * quantity)}</td>
                                <td className="w-1/6 text-center p-2">
                                    <img
                                        src="/icon-remove-item.svg"
                                        alt="remove-icon"
                                        className="w-5 h-5 cursor-pointer rounded-full border border-Rose500 p-1 ml-4"
                                        onClick={() => handleRemoveItem(id)}
                                    />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <div className="flex items-center justify-between mt-10 font-RedHatText">
                <p className="text-base text-Rose500 font-semibold">Order Total</p>
                <h1 className="text-2xl text-Rose900 font-bold"> {formatCurrency(subtotal)}</h1>
            </div>
            <div className="mt-10">
                <div className="flex items-center justify-center bg-Rose100 p-3 mb-9 rounded-md">
                    <img src="/icon-carbon-neutral.svg" alt="neutral-icon" className="mr-2 w-5 h-5" />
                    <p className="text-base font-RedHatText text-Rose900 font-normal">This is a <span className="text-Rose900 font-bold">carbon neutral</span> delivery</p>
                </div>
                <button className="bg-Red w-full rounded-full p-3 text-white font-RedHatText font-semi-bold" onClick={paywithpaystack}>
                    Process to Payment
                </button>
            </div>
        </div>
    );
};

export default CartTable;