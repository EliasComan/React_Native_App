import { authTypes } from "../types/auth.types";
import { getStateFromPath } from "@react-navigation/native";

const {SIGN_IN, SIGN_UP, SIGN_OUT} = authTypes

const initialState = {
    token:null,
    userId:null
}

const authReducer = (state = initialState, action) =>{ 

    switch (action.type) {
        case SIGN_UP:
           return{
            ...state,
            token: action.token,
            userId: action.userId
           }
        
        case SIGN_IN:
            return{
                ...state,
                token: action.token,
                userId: action.userId
            }
        default:
            return state
    }
}

export default authReducer