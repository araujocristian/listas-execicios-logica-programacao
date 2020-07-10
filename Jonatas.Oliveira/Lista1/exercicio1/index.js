document.getElementById("botao").addEventListener("click", function () {
  const comprimento = document.getElementById("comprimento").value;
  const largura = document.getElementById("largura").value;
  const area = comprimento * largura;

  alert("A área do terreno é de: " + area);
});
