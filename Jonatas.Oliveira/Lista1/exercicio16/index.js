document.getElementById("botao").addEventListener("click", function () {
  const sanduiches = document.getElementById("quantidadeSanduiches").value;

  const queijo = (sanduiches * 2 * 50) / 1000;
  const presunto = (sanduiches * 1 * 50) / 1000;
  const hamburguer = (sanduiches * 1 * 100) / 1000;

  alert(
    "para fazer um total de " +
      sanduiches +
      " sanduiches, será necessário comprar : " +
      queijo +
      "kg de queijo, " +
      presunto +
      "kg de presunto, " +
      hamburguer + "kg de carne."
  );
});
