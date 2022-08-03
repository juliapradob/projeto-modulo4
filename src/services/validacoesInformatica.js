class ValidacoesInformatica {
    /**
     * 
     * @param {string} tipo 
     * @returns boolean
     */
    static validaTipo (tipo) {
        return tipo.length > 3
    };

        /**
     * 
     * @param {string} nome 
     * @returns boolean
     */
    static validaNome(nome) {
        return nome.length > 3
    };

    /**
     * 
     * @param {string} marca 
     * @returns boolean
     */
    static validaMarca(marca) {
        return marca.length > 3
    };

    /**
     * 
     * @param {string} modelo 
     * @returns boolean
     */
    static validaModelo(modelo) {
        return modelo.length > 3
    };

    /**
     * 
     * @param {string} valor 
     * @returns boolean
     */
    static validaValor(valor) {
        return parseInt(valor) == valor;
    };

    /**
     * 
     * @param {string} qtd 
     * @returns boolean
     */
    static validaQtdEmEstoque(qtd) {
        return parseInt(qtd) == qtd;
    };
}

export default ValidacoesInformatica