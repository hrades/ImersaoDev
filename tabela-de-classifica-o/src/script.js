function calculaPontos(jogador) {
  var pontos = (jogador.vitorias*3) + (jogador.empates*2) - jogador.derrotas
  return pontos
}

var jogador1 = {nome:"Rafa", vitorias:0, empates:0, derrotas:0, pontos:0};
var jogador2 = {nome:"Paulo", vitorias:0, empates:0, derrotas:0, pontos:0};
var jogador3 = {nome:"Gui", vitorias:0, empates:0, derrotas:0, pontos:0};
var jogadores = [jogador1, jogador2, jogador3];

for (var k = 0; k < jogadores.length; k++){
  jogadores[k].pontos = calculaPontos(jogadores[k])
}

function exibeJogadores(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "</tr>";
  }

  var tabela = document.getElementById("tabelaJogadores");
  tabela.innerHTML = elemento;
}

exibeJogadores(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i]
  jogador.vitorias++
  jogador.pontos = calculaPontos(jogador)
  exibeJogadores(jogadores)
}

function adicionarEmpate(i) {
  var jogador = jogadores[i]
  jogador.empates++
  jogador.pontos = calculaPontos(jogador)
  exibeJogadores(jogadores)
}

function adicionarDerrota(i) {
  var jogador = jogadores[i]
  jogador.derrotas++
  jogador.pontos = calculaPontos(jogador)
  exibeJogadores(jogadores)
}

function reiniciarPontos(){
  for (var j = 0; j < jogadores.length; j++){
    jogadores[j].vitorias = 0
    jogadores[j].empates = 0
    jogadores[j].derrotas = 0
    jogadores[j].pontos = 0
  }
  exibeJogadores(jogadores)
}