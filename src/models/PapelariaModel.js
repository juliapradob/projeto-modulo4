class PapelariaModel {
    /**
     * 
     * @param {number} codigo 
     * @param {string} nome 
     * @param {string} marca 
     * @param {string} descricao 
     * @param {string} preco 
     */
    constructor(codigo, nome, marca, descricao, preco){
        this.codigo = codigo
        this.nome = nome
        this.marca = marca
        this.descricao = descricao
        this.preco = preco
    };
};

export default PapelariaModel