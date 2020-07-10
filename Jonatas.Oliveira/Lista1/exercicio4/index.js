document.getElementById("botao").addEventListener("click", function () {
  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;
  const diasVividos = idade * 365;

  alert(nome + ", você ja viveu " + diasVividos + " dias.");
});
