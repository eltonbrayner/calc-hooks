function CalculadoraService() {
  const SOMA = "+";
  const SUBTRAIR = "-";
  const DIVISAO = "/";
  const MULTI = "*";

  function calcular(num1, num2, op) {
    let resultado;

    switch (op) {
      case "+":
        resultado = num1 + num2;
        break;
      case "-":
        resultado = num1 - num2;
        break;
      case "*":
        resultado = num1 * num2;
        break;
      case "/":
        resultado = num1 / num2;
        break;
      default:
        resultado = 0;
        break;
    }

    return resultado;
  }

  return [calcular, SOMA, SUBTRAIR, DIVISAO, MULTI];
}

export default CalculadoraService;
