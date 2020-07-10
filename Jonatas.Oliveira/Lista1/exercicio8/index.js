document.getElementById("botao").addEventListener("click", function () {
  const primeiraNota = document.getElementById("primeiroTrimestre").value;
  const segundaNota = document.getElementById("segundoTrimestre").value;
  const terceiraNota = document.getElementById("terceiroTrimestre").value;

  const media = (1 * primeiraNota + 2 * segundaNota + 3 * terceiraNota) / 6;

  alert("A média do aluno é " + media);
});
