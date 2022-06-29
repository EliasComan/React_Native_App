import { combineReducers, createStore } from "redux";

import { collectionsReducer } from "./reducers/collections.reducer";
import { productsReduce } from "./reducers/products.reducer";

const rootReducer = combineReducers({
    products: productsReduce,
    collections :collectionsReducer
})
export default createStore(rootReducer)