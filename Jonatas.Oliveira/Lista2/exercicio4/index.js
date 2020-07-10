document.getElementById("botao").addEventListener("click", function () {
  const numeroA = parseInt(document.getElementById("numeroA").value);
  const numeroB = parseInt(document.getElementById("numeroB").value);

  if (numeroA == numeroB) {
    alert(numeroA + numeroB);
  } else {
    alert(numeroA * numeroB);
  }
});
