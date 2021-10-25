import environment from "../environment";
import jwtVerify from "../utils/jwt";
import buffer from "../utils/buffer";
export const client = {
    create: async (payload) => {
        const token = jwtVerify.getToken();
        const result = await fetch(`${environment.baseURL}/client/create/product`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        return result
    },
    update: async (id) => {
        const token = jwtVerify.getToken();
        const result = await fetch(`${environment.baseURL}/client/update/${id}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        return result
    },
    list: async () => {
        const token = jwtVerify.getToken();
        const result = await fetch(`${environment.baseURL}/client/list`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        return result
    }
}