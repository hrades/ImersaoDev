var nome = "Heloísa"

var nota1 = 9
var nota2 = 7
var nota3 = 4
var nota4 = 6

var notaFinal = (nota1 + nota2 + nota3 + nota4)/4

var notaFixada = notaFinal.toFixed(1);

console.log("Bem vindo " + nome)
console.log(notaFixada)
if (notaFixada >= 6){
  console.log("APROVADO")
} else{
  console.log("REPROVADO")
}

//DESAFIO - Conversor de moeda
var real = 10
var dolar = real/5.24

console.log(dolar.toFixed(2))

//isso é um comentário
/*Revisão
variáveis, strings, console.log, toFixed, operações matemáticas, concatenação*/