import { orderTypes } from "../types/orders.types";

const {GET_ORDERS, DELETE_ORDER} = orderTypes

export const getOrders = ()=> {
    return async (dispatch) => {
        try {
            const response = await fetch('https://react-navite-app-default-rtdb.firebaseio.com/orders.json',{
                method:'GET',
                headers:{
                    "Content-type": "application/json"
                }
            })
            const result = await response.json()
            const orders = Object.keys(result).map(key =>({
                ...result[key],
                id:key
            }))


            dispatch({
            type:GET_ORDERS,
            payload: orders,
            })
        } catch (error) {
            console.log(error)
            
        }
    }
}

export const deleteOrder =(id) => {
    return async (dispatch) => {
        try {
            await fetch(`https://react-navite-app-default-rtdb.firebaseio.com/orders/${id}.json`,{
                method:'delete',
                headers:{
                    'Content-Type' : 'application/json'
                }
            })
            dispatch({type:DELETE_ORDER,orderID:id})
        } catch (error) {
            console.log(error.message)
        }
    }
}