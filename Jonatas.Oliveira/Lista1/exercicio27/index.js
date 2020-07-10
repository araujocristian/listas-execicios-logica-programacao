document.getElementById("botao").addEventListener("click", function () {
  const numA = document.getElementById("numeroA").value;
  const numB = document.getElementById("numeroB").value;

  const divisao = numA / numB;

  if (numB == 0) {
    alert("não é possivel fazer divisões por 0");
  } else {
    alert(numA + " dividido por " + numB + " é igual a " + divisao);
  }
});
