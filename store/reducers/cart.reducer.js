import { cartTypes } from "../types/cart.types"

const {REMOVE_ITEM, ADD_TO_CART, CONFIRM_CART} = cartTypes

const initialState = {
    items: [],
    total:0
}
const total =  (list) => {
return    list.map(item => item.quantity * item.price)
        .reduce((a,b) => a+b,0)
}

export const cartReducer = (state= initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            let updatedCart = []
            if (state.items.find((item) => item.id === action.item.id)) {
                updatedCart = state.items.map((item) => {
                  if (item.id === action.item.id) item.quantity += 1;
                  return item;
                });
                
            }
            else{
                const item = {...action.item, quantity:1}
                updatedCart = [...state.items, item]
            }
            return {
                ...state,
                items: updatedCart,
                total: total(updatedCart)
            }
        case REMOVE_ITEM:
            const filteredItems = state.items.filter(items => items.id != action.itemID)
            return {
                ...state,
                items: filteredItems,
                total: total(filteredItems)
            }
        case CONFIRM_CART:
            console.log('confirm')
        default:
            return state
    }
}
