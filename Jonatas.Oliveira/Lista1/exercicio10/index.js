document.getElementById("botao").addEventListener("click", function () {
  const yA = document.getElementById("yA").value;
  const yB = document.getElementById("yB").value;
  const xA = document.getElementById("xA").value;
  const xB = document.getElementById("xB").value;

  const distancia = Math.sqrt(Math.pow(xA - xB, 2) + Math.pow(yA - yB, 2));

  alert("A distância entre os dois pontos é de " + distancia.toFixed(2));
});
