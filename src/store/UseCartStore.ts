
import { create } from "zustand";
import { CartStore } from "./storeContent";
import { useShallow } from 'zustand/react/shallow';
import { SelectorFn } from "./general";



const defaultCart: Omit<CartStore, 'actions'> = {
    cart: {},
    numberOfItemsInStore: 0,
};

export const useInitCart = create<CartStore>()((set, get) => ({
    ...defaultCart,
    actions: {
        addToCart: (obj) =>{
            set(({cart, numberOfItemsInStore}) =>{
                return {cart : {...cart, [obj.id]: obj}, numberOfItemsInStore: numberOfItemsInStore + 1}
            })
        },
      
        updateCart:(id, change) =>{
            const { cart } = get();
            const newCart = structuredClone(cart);
            const product = newCart[id]
            product.quantity = product.quantity + change
            product.subtotal = product.price * product.quantity;
            set({cart:newCart})
        },
        subTotalCalculation: () =>{
            const {cart} = get()
            return Object.values(cart).reduce((total, item) =>{
               return total + (item.price * item.quantity) 
            }, 0)
        },
        removeFromCart:(id) =>{
            const {cart, numberOfItemsInStore} = get()
            const newCart = structuredClone(cart)
            delete newCart[id];
            set({cart: newCart, numberOfItemsInStore: numberOfItemsInStore -1})
        }
    },
}));


export const useCartStore = <T>(selector: SelectorFn<CartStore, T>) => {
    const state = useInitCart(useShallow(selector));
    return state;
};