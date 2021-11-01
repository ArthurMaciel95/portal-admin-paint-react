import environment from "../environment";
import jwtVerify from "../utils/jwt";
import buffer from "../utils/buffer";
export const client = {

    show: async (id) => {
        const token = jwtVerify.getToken();
        const result = await fetch(`${environment.URL_PRODUCTION}/client/list/${id}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        return result
    },
    delete: async (id) => {
        const token = jwtVerify.getToken();
        const result = await fetch(`${environment.URL_PRODUCTION}/client/delete/${id}`, {
            method: 'Delete',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        return result
    },
    create: async (payload) => {
        const token = jwtVerify.getToken();
        const result = await fetch(`${environment.URL_PRODUCTION}/client/create`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(payload)

        })
        return result
    },
    update: async (id) => {
        const token = jwtVerify.getToken();
        const result = await fetch(`${environment.URL_PRODUCTION}/client/update/${id}`, {
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
        const result = await fetch(`${environment.URL_PRODUCTION}/client/list`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        return result
    }
}