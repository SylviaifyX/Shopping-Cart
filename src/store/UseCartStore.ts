
import { create } from "zustand";
import { CartStore } from "./storeContent";
import { useShallow } from 'zustand/react/shallow';
import { SelectorFn } from "./general";
import { ProductCardProps } from "../components/ProductCardSection";


 const defaultCart: Omit<CartStore, 'actions'> = {
         cart: {},
     numberOfItemsInStore: 0,
     };

export const useInitCart = create<CartStore>()((set, get) => ({
    ...defaultCart,
    actions: {
        addToCart: (obj:ProductCardProps) => {
            const { cart } = get();
            const newCart = structuredClone(cart);


            const id = obj.id.toString()

            if(newCart[id]){
                newCart[id].quantity += 1
            }else{
                newCart[id] = {...obj, quantity: 1}
            }
            set({
                cart: newCart,
                numberOfItemsInStore: Object.keys(newCart).length,
            });
        },
    },
}));

// const defaultCart: Omit<CartStore, 'actions'> = {
//     cart: {},
//     numberOfItemsInStore: 0,
// };
// export const useInitCart = create<CartStore>()((set, get) =>({
//     ...defaultCart,
//     actions:{
//         addToCart:({obj, id, change}: {obj:ProductCardProps, id:string, change:number}) =>{
//             const {cart, numberOfItemsInStore} = get()
//             const newCart = structuredClone(cart)

//             if(newCart[id]){
//                 newCart[id].quantity += change
//             }else{
//                 newCart[id] = {...obj, quantity: change}
//             }
//             set({cart: newCart, numberOfItemsInStore:Object.keys(newCart).length})
//         }
//     }
// }))


export const useCartStore = <T>(selector: SelectorFn<CartStore, T>) => {
    const state = useInitCart(useShallow(selector));
    return state;
  };