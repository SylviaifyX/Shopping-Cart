
type PaymentMethodProps = {
    paymentStatus: string | null
    setPaymentStatus: React.Dispatch<React.SetStateAction<string | null>>
}

const PaymentMethod = ({ paymentStatus, setPaymentStatus }: PaymentMethodProps) => {
    return (
        <>
            {paymentStatus &&
                <div className="mt-8 p-4 border border-gray-300 rounded-lg bg-gray-100 text-center">
                    <p className="text-lg font-semibold text-Rose900">{paymentStatus}</p>
                    <button className="mt-3 bg-Blue-500 text-white bg-Red p-2 rounded-md" onClick={() => {setPaymentStatus(null)}}>
                        Start New Order
                    </button>
                </div>
            }
        </>

    )
}
export default PaymentMethod