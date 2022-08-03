class ValidacoesCliente {
    static validaNome(nome) {
        return nome.length >= 3
    };

    static validaEmail(email) {
        const emailValidado = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        return emailValidado.test(email)        
    };

    static validaTelefone(telefone) {
        const telefoneValidado = parseInt(telefone)
        return telefoneValidado == telefone
    };

    static validaCPF(cpf) {
        return cpf.length == 11
    };

    static clienteIsValid(nome, email, telefone, cpf) {
        return this.validaNome(nome) && this.validaTelefone(telefone) && this.validaEmail(email) && this.validaCPF(cpf)
    };
}

export default ValidacoesCliente