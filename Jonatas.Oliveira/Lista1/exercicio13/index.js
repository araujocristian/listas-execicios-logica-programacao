document.getElementById("botao").addEventListener("click", function () {
  const numero = document.getElementById("numero").value;

  const centena = Math.trunc(numero / 100);
  const dezena = Math.trunc((numero % 100) / 10);
  const unidade = Math.trunc((numero % 10) % 10);

  alert(
    "Centena = " + centena + ", Dezena = " + dezena + ", Unidade = " + unidade
  );
});
