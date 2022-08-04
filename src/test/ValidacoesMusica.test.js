import ValidacoesMusica from "../services/ValidacoesMusica.js"

test("Validar se o tipo tem 2 caracteres ou mais", () => {
    expect(ValidacoesMusica.validaTipo("CD")).toBe(true)
});

test("Validar se o tipo tem 2 caracteres ou mais", () => {
    expect(ValidacoesMusica.validaTipo("D")).toBe(false)
});

test("Validar se o tipo tem 2 caracteres ou mais", () => {
    expect(ValidacoesMusica.validaTipo("DVD")).toBe(true)
});

test("Verificar se o gênero tem 3 caracteres ou mais", () => {
    expect(ValidacoesMusica.validaGenero("Pop")).toBe(true)
});

test("Verificar se o gênero tem 3 caracteres ou mais", () => {
    expect(ValidacoesMusica.validaGenero("Fa")).toBe(false)
});

test("Verificar se o gênero tem 3 caracteres ou mais", () => {
    expect(ValidacoesMusica.validaGenero("Rock")).toBe(true)
});

test("Verifica se o nome do artista tem 2 caracteres ou mais", () => {
    expect(ValidacoesMusica.validaArtista("The Beatles")).toBe(true)
});

test("Verifica se o nome do artista tem 2 caracteres ou mais", () => {
    expect(ValidacoesMusica.validaArtista("Anitta")).toBe(true)
});

test("Verifica se o nome do artista tem 2 caracteres ou mais", () => {
    expect(ValidacoesMusica.validaArtista("B")).toBe(false)
});

test("Verifica se o preço é número", () => {
    expect(ValidacoesMusica.validaPreço("10")).toBe(true)
});

test("Verifica se o preço é número", () => {
    expect(ValidacoesMusica.validaPreço("59")).toBe(true)
});

test("Verifica se o preço é número", () => {
    expect(ValidacoesMusica.validaPreço("Vinte")).toBe(false)
});