class ValidacoesLivro {
    /**
     * 
     * @param {string} titulo 
     * @returns boolean
     */
    static validaTitulo(titulo) {
        return titulo.length > 1 && titulo.length < 5633;
    };

        /**
         * 
         * @param {string} autor 
         * @returns boolean
         */
    static validaAutor(autor) {
        return autor.length > 2;
    };

    /**
     * 
     * @param {string} genero 
     * @returns boolean
     */
    static validaGenero(genero) {
        return genero.length > 3;
    };

    /**
     * Compara o valor númerico com o valor em string, para verificar se são iguais
     * @param {string, number} valor 
     * @returns boolean
     */
    static validaValor(valor) {
        return parseInt(valor) == valor;
    };

    /**
     * Verifica todos os dados de uma vez
     * @param {string} titulo 
     * @param {string} autor 
     * @param {string} genero 
     * @param {string, number} valor 
     * @returns boolean
     */
    static livroValido(titulo, autor, genero, valor) {
        return this.validaTitulo(titulo) && this.validaAutor(autor) && this.validaGenero(genero) && this.validaValor(valor);
    };
};

export default ValidacoesLivro