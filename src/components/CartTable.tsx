const CartTable = () => {
    return (
        <div className="w-full">
            <table >
                {/* <thead>
      <tr>
        <th>Product Image</th>
        <th>Color</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Total</th>
      </tr>
            </thead> */}
                <tbody>
                    {/* Row with full-width red background */}
                    <tr className="">
                        <td colSpan={5} className="text-start py-2 font-bold text-Rose900 text-base">Red Product Row</td>
                    </tr>

                    {/* Regular row */}
                    <tbody className="font-RedHatText">
                        <tr className="items-center">
                            {/* Product Image */}
                            <td className="w-1/6 overflow-hidden">
                                <img
                                    src="/image-baklava-desktop.jpg"
                                    alt="Product Image"
                                    className="w-full object-cover rounded"
                                />
                            </td>

                            <td className="text-Red font-bold text-base w-1/4 text-center p-2">1x</td>
                            <td className="text-Rose400 font-medium w-1/4 text-center p-2">
                                @ 500.0
                            </td>
                            <td className="text-Rose500 font-semibold w-1/4 text-center p-2">$500.0</td>
                            <td className="w-1/6 text-center p-2">
                                <img
                                    src="/icon-remove-item.svg"
                                    alt="remove-icon"
                                    className="w-5 h-5 cursor-pointer rounded-full border border-Rose500 p-1 ml-4"
                                />
                            </td>
                        </tr>
                    </tbody>
                </tbody>
                <hr className="w-ful h-0.5 text-Rose100 mt-2" />
                <tbody>
                    {/* Row with full-width red background */}
                    <tr className="">
                        <td colSpan={5} className="text-start py-2 font-bold text-Rose900 text-base">Red Product Row</td>
                    </tr>

                    {/* Regular row */}
                    <tbody className="font-RedHatText">
                        <tr className="items-center">
                            {/* Product Image */}
                            <td className="w-1/6 overflow-hidden">
                                <img
                                    src="/image-baklava-desktop.jpg"
                                    alt="Product Image"
                                    className="w-full object-cover rounded"
                                />
                            </td>

                            <td className="text-Red font-bold text-base w-1/4 text-center p-2">1x</td>
                            <td className="text-Rose400 font-medium w-1/4 text-center p-2">
                                @ 500.0
                            </td>
                            <td className="text-Rose500 font-semibold w-1/4 text-center p-2">$500.0</td>
                            <td className="w-1/6 text-center p-2">
                                <img
                                    src="/icon-remove-item.svg"
                                    alt="remove-icon"
                                    className="w-5 h-5 cursor-pointer rounded-full border border-Rose500 p-1 ml-4"
                                />
                            </td>
                        </tr>
                    </tbody>
                </tbody>
                <hr className="w-ful h-0.5 text-Rose100 mt-2" />
            </table>
        </div>
    );
};
export default CartTable;
