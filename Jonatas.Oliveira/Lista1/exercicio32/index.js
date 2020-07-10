document.getElementById("botao").addEventListener("click", function () {
  const pesoEmKilos = document.getElementById("peso").value;

  const conversor = pesoEmKilos * 1000;

  alert("O seu peso em gramas equivale a = " + conversor + " gramas");
});
