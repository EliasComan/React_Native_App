import { applyMiddleware, combineReducers, createStore } from "redux";

import { cartReducer } from "./reducers/cart.reducer";
import { collectionsReducer } from "./reducers/collections.reducer";
import { productsReduce } from "./reducers/products.reducer";
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    products: productsReduce,
    collections :collectionsReducer,
    cart: cartReducer
})
export default createStore(rootReducer, applyMiddleware(thunk))