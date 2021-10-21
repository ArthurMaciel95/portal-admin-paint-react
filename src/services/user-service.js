import environment from "../environment"
import jwt from '../utils/jwt'

export const user = {
    login: async (payload) => {
        return await fetch(`${environment.baseURL}/user/access`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + payload
            },
        })
    },
    register: async (payload) => {
        return await fetch(`${environment.baseURL}/user/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + jwt.getToken()
            }
        })
    }
}