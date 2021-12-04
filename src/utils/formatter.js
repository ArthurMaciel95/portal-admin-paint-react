export const formatter = {

    /**
     * Verifica se o elemento é nulo.
     * @param {string} text 
     * @returns {boolean}
     */
    isNull: (text) => {
        if (typeof text == 'null' || text.length === 0 || text === '') {
            return true
        }
        return false
    },

    /**
    * Verifica o formato do Email
    * @param {String} email
    * @returns True para valido ou Throw para invalido.
    *
    */
    isEmail: (email) => {
        var expreg = /^([a-zA_Z0-9\.-]+)@([a-z0-9]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/gi;
        if (!email) {
            throw { message: "It is necessary to inform the E-mail." };
        } else if (!expreg.test(email)) {
            throw { message: "Invalid email format." };
        } else {
            return true;
        }
    }
}

export default formatter;