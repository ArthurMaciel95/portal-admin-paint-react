import environment from "../environment";
import jwtVerify from "../utils/jwt";
import buffer from "../utils/buffer";
export const client = {
    create: async (payload) => {
        const token = jwtVerify.getToken();
        const result = await fetch(`${environment.baseURL}/create/product`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })

    },
    update: async (id) => {
        const token = jwtVerify.getToken();
        const result = await fetch(`${environment.baseURL}/`)
    }
}