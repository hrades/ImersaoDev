var numeroSecreto = parseInt(Math.random() * 11);


function Chutar() {
  var elementoResultado = document.getElementById("resultado")
  var chute = parseInt(document.getElementById("valor").value);
  var tentativas = 0;
  
  for(tentativas = 0; tentativas < 4; tentativas++) {
    if (chute == numeroSecreto) {
      elementoResultado.innerHTML = "Você acertou!"
      break
  } 
    else if (chute > 10 || chute < 0) {
      elementoResultado.innerHTML = "NÚMERO INVALIDO\n Você deve digitar números entre 0 e 10"
      tentativas = tentativas - 1;
  } 
    else {
      if (numeroSecreto < chute){
        elementoResultado.innerHTML = "Você errou, tente um número menor";
      } else {
        elementoResultado.innerHTML = "Você errou, tente um número maior";
      }
    }
  }
  
  
  /*if (tentativas == 3){
    elementoResultado.innerHTML = "Número de tentativas excedido\n A resposta era " + numeroSecreto;
    }*/
  
  //não consegui adicionar as tentativas do jeito q sei fazer contador, ele mostra direto que o número foi excedido logo após o primeiro chute
  }