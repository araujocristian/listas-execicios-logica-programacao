document.getElementById("botao").addEventListener("click", function () {
  const primeiraNota = document.getElementById("primeiraNota").value;
  const segundaNota = document.getElementById("segundaNota").value;

  const media = (2 * primeiraNota + 3 * segundaNota) / 5;

  alert("A média do aluno é " + media);
});
