class ValidacoesCliente {
    static validaNome(nome) {
        return nome.length >= 2
    };

    static validaEmail(email) {
        const emailValidado = /^[a-z0-9.]+@[a-z0-9]+.[a-z]+.([a-z]+)?$/i
        return emailValidado.test(email)        
    };

    static validaTelefone(telefone) {
        const telefoneValidado = parseInt(telefone)
        return telefoneValidado == telefone
    };

    static clienteIsValid(nome, email, telefone) {
        return this.validaNome(nome) && this.validaTelefone(telefone) && this.validaEmail(email)
    };
}

export default ValidacoesCliente