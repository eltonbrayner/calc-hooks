function CalculadoraService() {
  const SOMA = "+";
  const SUBTRAIR = "-";
  const DIVISAO = "/";
  const MULTI = "*";

  function calcular(num1, num2, op) {
    let resultado;

    switch (op) {
      case SOMA:
        resultado = num1 + num2;
        break;
      case SUBTRAIR:
        resultado = num1 - num2;
        break;
      case MULTI:
        resultado = num1 * num2;
        break;
      case DIVISAO:
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
