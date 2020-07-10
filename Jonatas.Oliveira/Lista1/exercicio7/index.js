document.getElementById("botao").addEventListener("click", function () {
  const diaAtual = parseInt(document.getElementById("dia").value);
  const mes = parseInt(document.getElementById("mes").value);

  const mesAtual = (mes - 1) * 30;
  const diasPassados = mesAtual + diaAtual;

  alert("Já se passaram " + diasPassados + " dias, desde o começo do ano.");
});
