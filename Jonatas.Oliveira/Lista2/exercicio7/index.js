document.getElementById("botao").addEventListener("click", function () {
  const numero = parseInt(document.getElementById("numero").value);

  const resto = numero % 2;

  if (resto == 0) {
    alert(numero + 5);
  } else {
    alert(numero + 8);
  }
});
