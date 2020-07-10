document.getElementById("botao").addEventListener("click", function () {
  const ml350 = document.getElementById("350Ml").value;
  const ml600 = document.getElementById("600Ml").value;
  const doisLitros = document.getElementById("2Litros").value;

  const latas = (ml350 * 35) / 100;
  const garrafas600 = (ml600 * 60) / 100;
  const garrafa2litros = doisLitros * ((2 * 100) / 100);

  const totalLitros = latas + garrafas600 + garrafa2litros;

  alert("Você comprou um total de " + totalLitros + " litros de refrigerante.");
});
