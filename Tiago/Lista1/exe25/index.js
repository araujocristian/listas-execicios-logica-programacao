document
  .getElementById("btn-exibir-valor")
  .addEventListener("click", function () {
    const altura = document.getElementById("altura").value;
    const raio = document.getElementById("raio").value;

    const volume = Math.PI * (raio * raio) * altura;
    alert(" O volume da caixa d'agua é de " + volume + " Litros");
  });
