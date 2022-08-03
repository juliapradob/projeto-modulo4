class ValidacoesMusica {
    static validaDados (tipo, gênero, artista){
        return tipo.length >=2 && gênero.length>=2 && artista.length>=2
    }
    static validaPreço (preço){
        const preçoValidado=parseInt(preço)
        return preçoValidado==preço
    }
    static validaProduto (tipo, gênero, artista, preço){
        return this.validaDados(tipo, gênero, artista) && this.validaPreço (preço)
    }
}
export default ValidacoesMusica