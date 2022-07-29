class ValidacoesMusica {
    static validaDados (tipo, gênero, artista){
        return tipo.length >=2 && gênero.length>=2 && artista.length>=2
    }
    static validaPreço (preço){
        const preçoValidado=parseInt(preço)
        return preçoValidado==preço
    }
}
export default ValidacoesMusica