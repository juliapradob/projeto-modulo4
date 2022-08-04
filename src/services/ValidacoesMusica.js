class ValidacoesMusica {
    /**
     * 
     * @param {string} tipo 
     * @returns boolean
     */
    static validaTipo(tipo){
        return tipo.length >= 2
    };

        /**
     * 
     * @param {string} genero 
     * @returns boolean
     */
    static validaGenero(genero) {
        return genero.length >= 3
    };

        /**
     * 
     * @param {string} artista 
     * @returns boolean
     */
    static validaArtista(artista) {
        return artista.length >= 2
    };

    /**
     * 
     * @param {string} preço 
     * @returns boolean
     */
    static validaPreço(preço) {
        const preçoValidado = parseInt(preço)
        return preçoValidado == preço
    };

    /**
     * 
     * @param {string} tipo 
     * @param {string} gênero 
     * @param {string} artista 
     * @param {string} preço 
     * @returns boolean
     */
    static validaProduto (tipo, genero, artista, preço){
        return this.validaTipo(tipo) && this.validaGenero(genero) && this.validaArtista(artista) && this.validaPreço(preço)
    };
}
export default ValidacoesMusica