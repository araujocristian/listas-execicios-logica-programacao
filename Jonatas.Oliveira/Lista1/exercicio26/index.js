document.getElementById("botao").addEventListener("click", function () {
  const numA = parseInt(document.getElementById("numeroA").value);
  const numB = parseInt(document.getElementById("numeroB").value);
  const numC = parseInt(document.getElementById("numeroC").value);

  const multiplicacao = numA * numB * numC;

  alert("O resultado da multiplicação desses números é de = " + multiplicacao);
});
