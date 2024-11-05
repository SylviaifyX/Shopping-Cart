
const Currency_FORMATTER = new Intl.NumberFormat("en-NG", {currency: "NGN", style: "currency"})
export function formatCurrency(number: number){
    return Currency_FORMATTER.format(number)
}