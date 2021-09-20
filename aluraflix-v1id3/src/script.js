/*
//anotações de aula - antes do desenvolvimento do projeto
var filme1 = "Star Wars";
var filme2 = "10 coisas que eu odeio em você";
var filme3 = "Raya";

//experimentar h1, strong, etc
document.write("<p>" + filme1 + "</p>");
document.write("<p>" + filme2 + "</p>");
document.write("<p>" + filme3 + "</p>");

var listaFilmes = ["Star Wars", "10 coisas que eu odeio em você", "Raya"];

//adicionar elementos
for (var c = 0; c < 8; c++) {
  listaFilmes.push("Harry Potter " + [c + 1]);
}

for (var indice = 0; indice < listaFilmes.length; indice++) {
  document.write("<p>" + listaFilmes[indice] + "\n </p>");
}*/

var listaFilmes = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGb4iuBHK7xaUZHAzy_sn3oMZAni_sTOCLWQ&usqp=CAU",
  "https://qualanime.files.wordpress.com/2015/08/img_5191.jpg?w=730",
  "https://kpoplat.com/wp-content/uploads/2021/06/Nevertheless-19-kpoplat-750x450.png"
];

function Adicionar() {
  var novoFilme = document.getElementById("filme");
  listaFilmes.push(novoFilme);
}

for (var indice = 0; indice < listaFilmes.length; indice++) {
  document.write("<img src=" + listaFilmes[indice] + ">");
}
