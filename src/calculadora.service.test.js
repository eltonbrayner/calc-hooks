import React from "react";
import ReactDOM from "react-dom";
import CalculadoraService from "./calculadora.service";

describe("Teste do CalculadoraService", () => {
  const [calcular, SOMA, SUBTRAIR, DIVISAO, MULTI] = CalculadoraService();

  it("deve garantir que 1 + 4 = 5.", () => {
    let soma = calcular(1, 4, SOMA);
    expect(soma).toEqual(5);
  });

  it("deve garantir que 1 - 4 = -3 .", () => {
    let sub = calcular(1, 4, SUBTRAIR);
    expect(sub).toEqual(-3);
  });

  it("deve garantir que 10 / 2 = 5 .", () => {
    let div = calcular(10, 2, DIVISAO);
    expect(div).toEqual(5);
  });

  it("deve garantir que 2 * 4 = 8 .", () => {
    let mult = calcular(2, 4, MULTI);
    expect(mult).toEqual(8);
  });

  it("deve retornar 0 para operação inválida.", () => {
    let opInvalid = calcular(2, 4, "%");
    expect(opInvalid).toEqual(0);
  });
});
