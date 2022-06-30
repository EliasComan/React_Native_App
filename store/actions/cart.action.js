import { cartTypes } from "../types/cart.types";

const {ADD_TO_CART,REMOVE_ITEM,CONFIRM_CART} = cartTypes

export const AddtoCart  = (product) =>({
    type:ADD_TO_CART,
    item:product
})

export const ConfirmCart = (cart) => ({
    type: CONFIRM_CART,
    cart
})

export const RemoveItem = (productID) => ({
    type:REMOVE_ITEM,
    itemID:productID
})
