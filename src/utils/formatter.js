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
    }
}

export default formatter;