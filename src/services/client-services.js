import {baseURL} from '../environment/index'
import axios from 'axios'

class clientService {
    constructor(){}

    /* 
    * Lista todos os clientes.
    * @return Promise
    * */
    listClients(){
        const path = `${baseURL}/client/list`
        return  axios({
            method:'get',
            url:path,
        })
    }
    /* 
    * @params { id } identificação de um cliente 
    * Lista somente um cliente através do id
    * @return Promise
    * */
    listOneClient(id){
        const path = `${baseURL}/client`
        return axios({
            method:'get',
            url:path,
            params:id
        })
    }

    /* @params { payload } todos os dados a serem enviados
    * Cria um novo cliente
    * @return Promise
    * */
    CreateClient(payload){
        const path = `${baseURL}/client/list`;
        return axios({
            method:'post',
            url:path,
            data:payload
        })
    }
}

export default clientService;