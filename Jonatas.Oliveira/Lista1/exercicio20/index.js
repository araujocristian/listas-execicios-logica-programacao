document.getElementById("botao").addEventListener("click", function () {
  const quantidadeBlusas = document.getElementById("quantidadeBlusas").value;
  const quantidadeNovelos = document.getElementById("quantidadeNovelos").value;

  const novelosPorBlusa = quantidadeNovelos / quantidadeBlusas;

  alert("A quantidade de novelo(s) usado(s) para confeccionar uma blusa é de " + novelosPorBlusa);
});
