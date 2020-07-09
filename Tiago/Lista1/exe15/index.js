document
  .getElementById("btn-exibir-valor")
  .addEventListener("click", function () {
    const valorConta = document.getElementById("conta").value;

    const carlos = Math.floor(valorConta / 3);
    const andre = Math.floor(valorConta / 3);
    const felipe = valorConta - carlos - andre;

    document.write(
      "Carlos irá pagar R$ " +
        carlos.toFixed(2) +
        "Vitor irá pagar R$ " +
        andre.toFixed(2) +
        "Felipe irá pagar R$ " +
        felipe.toFixed(2)
    );
  });
