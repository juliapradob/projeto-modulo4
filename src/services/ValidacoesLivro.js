class ValidacoesLivro {
    /**
     * 
     * @param {*} titulo 
     * @returns 
     */
    static validaTitulo(titulo) {
        return titulo.length > 1 && titulo.length < 5633;
    };

    static validaAutor(autor) {
        return autor.length > 2;
    }

    static validaGenero(genero) {
        return genero.length > 3;
    };

    static validaValor(valor) {
        return parseInt(valor) == valor;
    };

    static livroValido(titulo, autor, genero, valor) {
        return this.validaTitulo(titulo) && this.validaAutor(autor) && this.validaGenero(genero) && this.validaValor(valor);
    };
};

export default ValidacoesLivro