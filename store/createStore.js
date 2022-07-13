import { applyMiddleware, combineReducers, createStore } from "redux";

import authReducer from "./reducers/auth.reducer";
import { cartReducer } from "./reducers/cart.reducer";
import { collectionsReducer } from "./reducers/collections.reducer";
import { orderReducer } from "./reducers/orders.reducer";
import { productsReduce } from "./reducers/products.reducer";
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    products: productsReduce,
    collections :collectionsReducer,
    cart: cartReducer,
    orders:orderReducer,
    auth:authReducer
})
export default createStore(rootReducer, applyMiddleware(thunk))