import environment from "../environment"
import jwt from '../utils/jwt'
import buffer from "../utils/buffer";
export const user = {
    /**
     * @param {string} email 
     * @param {string} password 
     * @returns {promise} retorna uma promise
     * 
     */
    login: async (email, password) => {
        const payload = `${email}:${password}`
        const encoded = buffer.encoded(payload, 'base64');

        return await fetch(`${environment.baseURL}/user/access`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + encoded
            },
        })
    },

    /**
     * 
     * @param {object} payload dados para criação de um usuário admin. 
     * @returns {Promise} retorna uma promise
     */
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