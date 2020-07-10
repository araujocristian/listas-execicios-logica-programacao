document.getElementById("botao").addEventListener("click", function () {
  const valorA = document.getElementById("numeroA").value;
  const valorB = document.getElementById("numeroB").value;
  const valorC = document.getElementById("numeroC").value;

  if (valorA > valorB) {
    if (valorB > valorC) {
      alert(valorA + ", " + valorB + ", " + valorC);
    } else {
      if (valorA > valorC) {
        alert(valorA + ", " + valorC + ", " + valorB);
      } else {
        alert(valorC + ", " + valorA + ", " + valorB);
      }
    }
  } else {
    if (valorB > valorC) {
      if (valorA > valorC) {
        alert(valorB + ", " + valorA + ", " + valorC);
      } else {
        alert(valorB + ", " + valorC + ", " + valorA);
      }
    } else {
      alert(valorC + ", " + valorB + ", " + valorA);
    }
  }
});
