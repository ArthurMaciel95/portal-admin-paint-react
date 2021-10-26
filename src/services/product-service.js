import environment from "../environment"
import jwtVerify from "../utils/jwt"

export const product = {
    create: async () => {
        return await fetch(`${environment.URL_PRODUCTION}/product/create`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'authorization': 'Bearer ' + jwtVerify.getToken()
            }
        })
    },
    update: async (id) => {
        return await fetch(`${environment.URL_PRODUCTION}/product/update/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                'authorization': 'Bearer ' + jwtVerify.getToken()
            }
        })
    },

    list: async () => {
        return await fetch(`${environment.URL_PRODUCTION}/product/list`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'authorization': 'Bearer ' + jwtVerify.getToken()
            }
        })
    },
    show: async (id) => {
        return await fetch(`${environment.URL_PRODUCTION}/product/list/${id}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'authorization': 'Bearer ' + jwtVerify.getToken()
            }
        })
    },
    delete: async (id) => {
        return await fetch(`${environment.URL_PRODUCTION}/product/delete/${id}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'authorization': 'Bearer ' + jwtVerify.getToken()
            }
        })
    }
}