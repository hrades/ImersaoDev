function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorNumericoDolar = parseFloat(valor);

  var valorReais = valorNumericoDolar * 5.24;
  console.log(valorReais);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em reais é R$ " + valorReais.toFixed(2);
  elementoValorConvertido.innerHTML = valorConvertido;
}