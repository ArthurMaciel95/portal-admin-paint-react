import {baseURL} from '../environment/index'
import axios from 'axios'

class ProductService {
    constructor(){}

    /* 
    * Lista todos os clientes.
    * @return Promise
    * */
    listProduct(){
        const path = `${baseURL}/product/list`
        return  axios({
            method:'get',
            url:path,
        })
    }
    /* 
    * @params { id } identificação de um produto 
    * Lista somente um produto através do id
    * @return Promise
    * */
    listOneProduct(id){
        const path = `${baseURL}/product/list`
        return axios({
            method:'get',
            url:path,
            params:id
        })
    }

    /* @params { payload } todos os dados a serem enviados
    * Cria um novo produto
    * @return Promise
    * */
    createProduct(payload){
        const path = `${baseURL}/product/create`;
        return axios({
            method:'post',
            url:path,
            data:payload
        })
    }

    /* @params { id } identificação de um produto 
    *  @payload dados a serem enviados
    * Atualiza um produto
    * @return Promise
    * */
    updateProduct(id,payload){
        const path = `${baseURL}/product/update`;
        return axios({
            method:'put',
            url:path,
            data:payload,
            params:id
        })
    }

    /* @params { id } identificação de um produto 
    * Deleta um produto
    * @return Promise
    * */
    deleteProduct(id){
        const path = `${baseURL}/product/delete`;
        return axios({
            method:'delete',
            url:path,
            params:id
        })
    }
}

export default ProductService;