import { Collections } from '../../database/collections'
import { collectionsTypes } from '../types/collections.types'

const {SELECTED_COLLECTIONS} = collectionsTypes

const initialState= {
    collections : Collections,
    selected: null

}

export const collectionsReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case SELECTED_COLLECTIONS:
            const indexCollection = state.collections.findIndex(collection => collection.id === action.collectionID)
            if (indexCollection === -1) {
                return state
            } else {
                return{
                    ...state,
                    selected: state.collections[indexCollection]
                }
            }
            break;
    
        default:
            return state
            break;
    }
}
