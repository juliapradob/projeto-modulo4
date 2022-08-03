import ValidacoesLivro from "../services/ValidacoesLivro.js";

test("Validar se o título tem mais de uma letra e menos de 5633", () => {
    expect(ValidacoesLivro.validaTitulo("O retrato de Dorian Gray")).toBe(true);
});

test('Validar se o autor tem pelo menos 3 letras', () => {
    expect(ValidacoesLivro.validaAutor("Emmanuel Jorge")).toBe(true);    
});

test('Valida o gênero do autor', () => {
    expect(ValidacoesLivro.validaGenero("Ficção")).toBe(true);
});

test('Validar o valor do livro como número', () => {
    expect(ValidacoesLivro.validaValor("57")).toBe(true);
});

test('Validar o valor do livro como número', () => {
    expect(ValidacoesLivro.validaValor(89)).toBe(true);
});

test('Validar o valor do livro como número', () => {
    expect(ValidacoesLivro.validaValor("Realizando teste")).toBe(false);
});