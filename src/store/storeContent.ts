import { ProductCardProps } from "../components/ProductCardSection"


export interface CartStore{
    cart: {[id: string]: ProductCardProps & {quantity: number}};
    numberOfItemsInStore: number;
    actions:{
        addToCart:(obj: ProductCardProps) => void
        // removeFromCart: () => void
    }
}