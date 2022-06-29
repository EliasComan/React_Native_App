import { collectionsTypes } from "../types/collections.types";

const { SELECTED_COLLECTIONS } = collectionsTypes

export const selectedCollection = (id) => {
    return {
        type:SELECTED_COLLECTIONS,
        collectionID: id
    }
}