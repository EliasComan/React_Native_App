import { productTypes } from "../types/products.types";
import { products } from "../../database/products";

const {SELECT_PRODUCT, FILTERED_PRODUCTS} = productTypes

const initialState = {
    products: products,
    selected: null,
    filter: []
}


export const productsReduce =  ( state = initialState, action) => {
    switch (action.type) {
        case SELECT_PRODUCT:
            return{
                ...state,
                selected: state.products.find(product => product.id === action.productID)
            }
            
        case FILTERED_PRODUCTS:
            return {
                ...state,
                filter: state.products.filter(product => product.categoryID === action.collectionID)
            }
        default:
            return state
    }
}