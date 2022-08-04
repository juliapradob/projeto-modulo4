class ValidacoesCliente {
    /**
     * 
     * @param {string} nome 
     * @returns boolean
     */
    static validaNome(nome) {
        return nome.length >= 3
    };

    /**
     * 
     * @param {string} email 
     * @returns boolean
     */
    static validaEmail(email) {
        const emailValidado = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        return emailValidado.test(email)        
    };

    /**
     * 
     * @param {string} telefone 
     * @returns boolean
     */
    static validaTelefone(telefone) {
        const telefoneValidado = parseInt(telefone)
        return telefoneValidado == telefone
    };

    /**
     * 
     * @param {string} cpf 
     * @returns boolean
     */
    static validaCPF(cpf) {
        return cpf.length == 11
    };

    /**
     * 
     * @param {string} nome 
     * @param {string} email 
     * @param {string} telefone
     * @param {string} cpf  
     * @returns boolean
     */
    static clienteIsValid(nome, email, telefone, cpf) {
        return this.validaNome(nome) && this.validaTelefone(telefone) && this.validaEmail(email) && this.validaCPF(cpf)
    };
}

export default ValidacoesCliente