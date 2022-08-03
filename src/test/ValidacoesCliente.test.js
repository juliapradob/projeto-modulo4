import ValidacoesCliente from "../services/ValidacoesCliente.js"

test("Validar se o nome tem 3 caracteres ou mais", () => {
    expect(ValidacoesCliente.validaNome("Julia")).toBe(true)
});

test("Validar se o nome tem 3 caracteres ou mais", () => {
    expect(ValidacoesCliente.validaNome("Ju")).toBe(false)
});

test("Validar se o nome tem 3 caracteres ou mais", () => {
    expect(ValidacoesCliente.validaNome("Fábio")).toBe(true)
});

test("Verificar se email é válido", () => {
    expect(ValidacoesCliente.validaEmail("julia@gmail.com")).toBe(true)
});

test("Verificar se email é válido", () => {
    expect(ValidacoesCliente.validaEmail("julia.gmail.com")).toBe(false)
});

test("Verificar se email é válido", () => {
    expect(ValidacoesCliente.validaEmail("fabio@hotmail.com.br")).toBe(true)
});

test("Verificar se CPF é válido", () => {
    expect(ValidacoesCliente.validaCPF("41454325844")).toBe(true)
});

test("Verificar se CPF é válido", () => {
    expect(ValidacoesCliente.validaCPF("03371154513")).toBe(true)
});

test("Verificar se CPF é válido", () => {
    expect(ValidacoesCliente.validaCPF("897205048200")).toBe(false)
});