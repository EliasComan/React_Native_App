import { URL_AUTH_SIGN_IN, URL_AUTH_SIGN_UP } from "../../database/firebase";

import { authTypes } from "../types/auth.types";

const { SIGN_IN, SIGN_UP, SIGN_OUT} = authTypes

export const signUp = (email, password ) => {
    return async (dispatch) => {
        try {
            const response = await fetch(URL_AUTH_SIGN_UP,{
                method: 'POST',
                headers:{
                    "Content-type" : "application/json"
                },
                body:JSON.stringify({
                    email,
                    password,
                    returnSecureToken:true
                })
                
            })
            const result = await response.json()
            dispatch({
                type: SIGN_UP,
                token:  result.idToken,
                userId: result.localId,
            })
        } catch (error) {
            console.log(error)
        }
    } 
}
export const signIn = (email, password) => {
return async ( dispatch) => {
    try {
        const response = await fetch(URL_AUTH_SIGN_IN,{
                method:'POST',
                headers:{
                    'Content-type' : 'application/json'
                },
                body:JSON.stringify({
                    email,
                    password,
                    returnSecureToken:true
                })
        })
        const result= await response.json()
        console.log(result)
        dispatch({
            type:SIGN_IN,
            token: result.idToken,
            userId: result.localId
        })
    } catch (error) {
        console.log(error)
    }
}
}