document.getElementById("botao").addEventListener("click", function () {
  const numero = document.getElementById("numero").value;

  for(let i = 1; i < 11; i++) {
    document.write(numero + " x " + i + " = " + (numero * i) + "<br />")
  }
});
