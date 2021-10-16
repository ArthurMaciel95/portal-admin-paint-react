import { api } from '../environment/index'
import axios from '../utils/axios'

class ClientService {
    constructor() { }

    /* 
    * Lista todos os clientes.
    * @return Promise
    * */
    listClients = () => {
        return new Promise(async (resolve, reject) => {
            const data = await axios.get(`/client/list`)

            if (!data) {
                reject({ message: 'data not found' })
            }

            resolve(data)
        })
    }
    /* 
    * @params { id } identificação de um cliente 
    * Lista somente um cliente através do id
    * @return Promise
    * */
    /* listOneClient(id) {
        const path = `/client`
        return axios({
            method: 'get',
            url: path,
            params: id
        })
    } */

    /* @params { payload } todos os dados a serem enviados
    * Cria um novo cliente
    * @return Promise
    * */
    /*    CreateClient(payload) {
           const path = `/client/list`;
           return axios({
               method: 'post',
               url: path,
               data: payload
           })
       } */
}

export default ClientService;