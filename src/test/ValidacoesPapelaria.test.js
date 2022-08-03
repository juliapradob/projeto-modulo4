import ValidacoesPapelaria from "../services/ValidacoesPapelaria.js";

test("Validar se o código tem exatamente 6 números e contém somente números", () => {
    expect(ValidacoesPapelaria.validaCodigoProduto("123456")).toBe(true);
});

test("Validar se o código é do tipo string", () => {
    expect(ValidacoesPapelaria.validaCodigoProduto(123456)).toBe(false);
});

test("Validar se o código contém somente números", () => {
    expect(ValidacoesPapelaria.validaCodigoProduto("a12345")).toBe(false);
});

test("Validar se o nome do produto tem pelo menos 1 letra", () => {
    expect(ValidacoesPapelaria.validaNomeProduto("Papel A4")).toBe(true);
});

test("Validar se a marca do produto tem pelo menos 1 letra", () => {
    expect(ValidacoesPapelaria.validaMarcaProduto("Chamex")).toBe(true);
});

test("Validar se a descrição do produto tem mais de 1 letra", () => {
    expect(ValidacoesPapelaria.validaDescricaoProduto("Papel A4 210mmx297mm")).toBe(true);
});

test("Validar se a descrição do produto tem mais de 1 letra", () => {
    expect(ValidacoesPapelaria.validaDescricaoProduto("")).toBe(false);
});

test("Validar se o preco é um número", () => {
    expect(ValidacoesPapelaria.validaPrecoProduto("2.10")).toBe(true);
});

test("Validar se o preco é um número", () => {
    expect(ValidacoesPapelaria.validaPrecoProduto(2.10)).toBe(true);
});

test("Validar se o preco é um número", () => {
    expect(ValidacoesPapelaria.validaPrecoProduto("teste")).toBe(false);
});

test("Validar se o preco não está vazio", () => {
    expect(ValidacoesPapelaria.validaPrecoProduto("")).toBe(false);
});