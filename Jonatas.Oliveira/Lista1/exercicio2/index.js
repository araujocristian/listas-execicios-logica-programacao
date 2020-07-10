document.getElementById("botao").addEventListener("click", function () {
  const quantidadeCavalos = document.getElementById("quantidade").value;
  const ferraduras = quantidadeCavalos * 4;

  alert(
    "A quantidade necessária de ferraduras para equipar os cavalos do seu haras é de: " +
      ferraduras +
      " ferraduras."
  );
});
