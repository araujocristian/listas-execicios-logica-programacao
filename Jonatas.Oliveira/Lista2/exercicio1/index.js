document.getElementById("botao").addEventListener("click", function () {
  const numeroA = parseInt(document.getElementById("numeroA").value);
  const numeroB = parseInt(document.getElementById("numeroB").value);
  const numeroC = parseInt(document.getElementById("numeroC").value);

  const soma = numeroA + numeroB;

  if (soma < numeroC) {
    return alert("É menor !!!");
  } else if (soma == numeroC) {
    return alert("É igual !!!");
  } else {
    return alert("É maior !!!");
  }
});
