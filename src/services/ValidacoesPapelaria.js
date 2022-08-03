class ValidacoesPapelaria {
    /**
     * 
     * @param {string} codigo 
     * @returns boolean
     */
    static validaCodigoProduto(codigo) {
        const tamanhoCodigo = codigo.length == 6
        const codigoValidado = parseInt(codigo)
        return (codigoValidado == codigo) && tamanhoCodigo
    };

    /**
     * 
     * @param {string} nome 
     * @returns boolean
     */
    static validaNomeProduto(nome){
        return nome.length >= 1
    };

    /**
     * 
     * @param {string} marca 
     * @returns boolean
     */
    static validaMarcaProduto(marca){
        return marca.length >= 1
    };

    /**
     * 
     * @param {string} descricao 
     * @returns boolean
     */
    static validaDescricaoProduto(descricao){
        return descricao.length >= 1
    };

    /**
     * 
     * @param {string} preco 
     * @returns boolean
     */
    static validaPrecoProduto(preco){
        return Number(preco) == preco && preco !== ""
    };

    /**
     * Verifica todos os dados
     * @param {string} codigo 
     * @param {string} nome 
     * @param {string} marca 
     * @param {string} descricao 
     * @param {string} preco 
     * @returns boolean
     */
    static isValid(codigo, nome, marca, descricao, preco){
        return this.validaCodigoProduto(codigo) && this.validaNomeProduto(nome) && this.validaMarcaProduto(marca) && this.validaDescricaoProduto(descricao) && this.validaPrecoProduto(preco)
    };
};

export default ValidacoesPapelaria