function listar(filme) {
  var elementoFilmeFavorito = "<img src=" + filme + ">";
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML =
    elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}

function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  if (
    filmeFavorito.startsWith("https://") ||
    filmeFavorito.startsWith("data:image") ||
    filmeFavorito.endsWith(".jpg") ||
    filmeFavorito.endsWith(".png")
  ) {
    listar(filmeFavorito);
  } else {
    console.error("Endereço inválido");
  }
  document.getElementById("filme").value = "";
}
