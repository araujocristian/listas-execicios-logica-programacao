document.getElementById("botao").addEventListener("click", function () {
  const conta = document.getElementById("valorConta").value;

  const carlosValor = Math.floor(conta / 3);
  const andreValor = Math.floor(conta / 3);
  const felipeValor = conta - carlosValor - andreValor;

  alert(
    "Carlos irá pagar o valor de R$" +
      carlosValor.toFixed(2) +
      ", André irá pagar o valor de R$" +
      andreValor.toFixed(2) +
      ", Felipe irá pagar o valor de R$" +
      felipeValor.toFixed(2)
  );
});
