document.getElementById("botao").addEventListener("click", function () {
  const litrosDeSuco = document.getElementById("litros").value;

  const partesSuco = (20/100) * litrosDeSuco;
  const partesAgua = (80/100) * litrosDeSuco;

  alert(
    "Para fazer " +
      litrosDeSuco +
      " litro(s) de suco, você irá precisar de " +
      partesSuco +
      " (ml) de suco, e " +
      partesAgua +
      " (ml) de água."
  );
});
