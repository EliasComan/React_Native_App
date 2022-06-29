import { productTypes } from "../types/products.types"

const { SELECT_PRODUCT, FILTERED_PRODUCTS} = productTypes

export const selectProduct= (id) => ({
    type: SELECT_PRODUCT,
    productID: id
})

export const filteredProducts = (id) => ({
    type:FILTERED_PRODUCTS,
    collectionID: id
})