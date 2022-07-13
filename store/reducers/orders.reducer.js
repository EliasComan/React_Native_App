import { orderTypes } from "../types/orders.types";

const {GET_ORDERS, DELETE_ORDER} = orderTypes

const initialState = {
    orders:[],
}

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDERS:
            return{
                ...state, 
                orders: action.payload
            }
        case DELETE_ORDER:
            return {
                state,
                orders: state.orders.filter(orders => orders.id != action.orderID )
            }
        default:
            return {
                state
            }
    }
}