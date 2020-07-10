document.getElementById("botao").addEventListener("click", function () {
  const numero = parseInt(document.getElementById("numero").value);

  if (numero > 0) {
    alert(numero * 2);
  } else {
    alert(numero * 3);
  }
});
