import axios from 'axios'
import environment from '../environment'

class userService {
    constructor() { }

    /* 
    * Lista todos os clientes.
    * @return Promise
    * */
    Access = (email, password) => {
        return new Promise(async (resolve, reject) => {
            try {
                const data = await axios.post(`${environment}/user/access`, { email, password })
            } catch (e) {
                console.log(e)
            }
        })
    }
    Register = () => {
        return new Promise(async (resolve, reject) => {
            try {
                await axios.get('')
            } catch (e) {
                console.log(e)
            }
        })
    }

}


export default userService;