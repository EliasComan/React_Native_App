import { cartTypes } from "../types/cart.types";

const {ADD_TO_CART,REMOVE_ITEM,CONFIRM_CART} = cartTypes

export const AddtoCart  = (product) =>({
    type:ADD_TO_CART,
    item:product
})


export const RemoveItem = (productID) => ({
    type:REMOVE_ITEM,
    itemID:productID
})

export const ConfirmCart = (cart, total) => {
    return async (dispatch) => {
        try {
            const response = await fetch('https://react-navite-app-default-rtdb.firebaseio.com/orders.json', {
                method: 'POST',
                headers: {
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify({
                    date: Date.now(),
                    cart,
                    total
                })
            })
            const result = await response.json()
            console.log(result)
            dispatch({
                    type:CONFIRM_CART,
                    confirm: true
            })
        } catch (error) {
            console.log(error)
        }
    }
}