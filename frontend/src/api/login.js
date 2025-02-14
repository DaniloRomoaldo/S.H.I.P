/* eslint-disable no-unused-vars */
import { api } from "../lib/axios";
import Cookies from "js-cookie"

export async function login({email, password}) {
    try {
        const response = await api.post('token', {email, password})
        const {token} = response.data;

        Cookies.set('auth_token', token, {expires:1, secure: true});
        return { token, email };

    }catch(error){

        throw new Error(error.response.data.message);
        
    }
}