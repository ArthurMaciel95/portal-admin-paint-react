const jwtVerify = {

    /**
     * @param {string} token é o jwt que está sendo retornado na requisição do webservice
     * @param {string} name é o token que está no localStorage
     * 
     * @returns {boolean} retorna true se for igual.
     */
    isEqual: (token, name) => {
        if (typeof name !== 'string') {
            throw new Error('name need to be string')
        }
        if (!localStorage.getItem(name) && !localStorage.getItem(name) !== token) {
            return true;
        }
    },
    /**
     * Resgata o token jwt do localStorage.
     * @returns {object}
     */
    getToken: () => {
        if (!localStorage.getItem('jwt_token')) {
            throw new Error('token jwt not found.')
        }
        return JSON.parse(localStorage.getItem('jwt_token'))
    }
}


export default jwtVerify;