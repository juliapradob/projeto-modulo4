import ValidacoesInformatica from "../services/ValidacoesInformatica.js"

test("Validar se o tipo tem 3 caracteres ou mais", () => {
    expect(ValidacoesInformatica.validaTipo("Celular")).toBe(true)
});

test("Validar se o tipo tem 3 caracteres ou mais", () => {
    expect(ValidacoesInformatica.validaTipo("D")).toBe(false)
});

test("Validar se o tipo tem 3 caracteres ou mais", () => {
    expect(ValidacoesInformatica.validaTipo("Cabo")).toBe(true)
});

test("Verificar se o nome tem 3 caracteres ou mais", () => {
    expect(ValidacoesInformatica.validaNome("Cabo USB com conector Lightning")).toBe(true)
});

test("Verificar se o nome tem 3 caracteres ou mais", () => {
    expect(ValidacoesInformatica.validaNome("Ab")).toBe(false)
});

test("Verificar se o nome tem 3 caracteres ou mais", () => {
    expect(ValidacoesInformatica.validaNome("Mouse gamer Razer Naga")).toBe(true)
});

test("Verifica se o nome da marca tem 2 caracteres ou mais", () => {
    expect(ValidacoesInformatica.validaMarca("HP")).toBe(true)
});

test("Verifica se o nome da marca tem 2 caracteres ou mais", () => {
    expect(ValidacoesInformatica.validaMarca("Motorola")).toBe(true)
});

test("Verifica se o nome da marca tem 2 caracteres ou mais", () => {
    expect(ValidacoesInformatica.validaMarca("C")).toBe(false)
});

test("Verifica se o modelo tem 1 caracteres ou mais", () => {
    expect(ValidacoesInformatica.validaModelo("602C")).toBe(true)
});

test("Verifica se o modelo tem 1 caracteres ou mais", () => {
    expect(ValidacoesInformatica.validaModelo("492L2")).toBe(true)
});

test("Verifica se o modelo tem 1 caracteres ou mais", () => {
    expect(ValidacoesInformatica.validaModelo("")).toBe(false)
});

test("Verifica se o preço é número", () => {
    expect(ValidacoesInformatica.validaValor("10")).toBe(true)
});

test("Verifica se o preço é número", () => {
    expect(ValidacoesInformatica.validaValor("59")).toBe(true)
});

test("Verifica se o preço é número", () => {
    expect(ValidacoesInformatica.validaValor("Vinte")).toBe(false)
});

test("Verifica se o valor em estoque é válido", () => {
    expect(ValidacoesInformatica.validaQtdEmEstoque("14")).toBe(true)
});

test("Verifica se o valor em estoque é válido", () => {
    expect(ValidacoesInformatica.validaQtdEmEstoque("1400")).toBe(true)
});

test("Verifica se o valor em estoque é válido", () => {
    expect(ValidacoesInformatica.validaQtdEmEstoque("Alguns")).toBe(false)
});