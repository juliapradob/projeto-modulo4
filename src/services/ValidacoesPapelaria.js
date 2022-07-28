class ValidacoesPapelaria {

    static validaCodigoProduto(codigo) {
        const tamanhoCodigo = codigo.length == 6
        const codigoValidado = parseInt(codigo)
        return (codigoValidado == codigo) && tamanhoCodigo
    }

    static validaNomeProduto(nome){
        return nome.length >= 1
    }

    static validaMarcaProduto(marca){
        return marca.length >= 1
    }

    static validaDescricaoProduto(descricao){
        return descricao.length >= 1
    }

    static validaPrecoProduto(preco){
        const tamanhoPreco = preco.length >= 1
        const precoValidado = parseFloat(preco)
        return (precoValidado == preco) && tamanhoPreco
    }

    static isValid(codigo, nome, marca, descricao, preco){
        return this.validaCodigoProduto(codigo) && this.validaNomeProduto(nome) && this.validaMarcaProduto(marca) && this.validaDescricaoProduto(descricao) && this.validaPrecoProduto(preco)
    }
}

export default ValidacoesPapelaria