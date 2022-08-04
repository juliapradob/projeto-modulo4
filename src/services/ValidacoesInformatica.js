class ValidacoesInformatica {
    /**
     * 
     * @param {string} tipo 
     * @returns boolean
     */
    static validaTipo (tipo) {
        return tipo.length >= 2
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
        return marca.length >= 2
    };

    /**
     * 
     * @param {string} modelo 
     * @returns boolean
     */
    static validaModelo(modelo) {
        return modelo.length >= 3
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

    /**
     * 
     * @param {string} tipo 
     * @param {string} nome 
     * @param {string} marca 
     * @param {string} modelo 
     * @param {string, number} valor 
     * @param {string, number} qtd 
     * @returns boolean
     */
    static validaProduto(tipo, nome, marca, modelo, valor, qtd) {
        return this.validaTipo(tipo) && this.validaNome(nome) && this.validaMarca(marca) && this.validaModelo(modelo) && this.validaValor(valor) && this.validaQtdEmEstoque(qtd)
    };
}

export default ValidacoesInformatica
