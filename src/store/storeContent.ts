import { ProductCardProps } from "../components/ProductCardSection"


export interface CartStore{
    cart: {[id:string]: ProductCardProps & {quantity: number; subtotal:number}};
    numberOfItemsInStore: number;
    actions:{
        addToCart:(obj: ProductCardProps) => void
        updateCart:(id:string, change: -1 |1) => void
        subTotalCalculation: () => number
        removeFromCart: (id:string) => void
    }
}