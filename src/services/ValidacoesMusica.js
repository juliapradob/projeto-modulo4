class ValidacoesMusica {
    /**
     * 
     * @param {string} tipo 
     * @param {string} gênero 
     * @param {string} artista 
     * @returns boolean
     */
    static validaDados (tipo, gênero, artista){
        return tipo.length >=2 && gênero.length>=2 && artista.length>=2
    };

    /**
     * 
     * @param {string} preço 
     * @returns boolean
     */
    static validaPreço (preço){
        const preçoValidado=parseInt(preço)
        return preçoValidado==preço
    };

    /**
     * 
     * @param {string} tipo 
     * @param {string} gênero 
     * @param {string} artista 
     * @param {string} preço 
     * @returns boolean
     */
    static validaProduto (tipo, gênero, artista, preço){
        return this.validaDados(tipo, gênero, artista) && this.validaPreço (preço)
    };
}
export default ValidacoesMusica