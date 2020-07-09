document
  .getElementById("btn-exibir-valor")
  .addEventListener("click", function () {
    const valor1 = document.getElementById("valor1").value;
    const valor2 = document.getElementById("valor2").value;

    const resultado = valor1 / valor2
    alert(' O resultado a da multiplicação dos três valores é: ' + resultado);
  });