document.getElementById("botao").addEventListener("click", function () {
  const diasSemAcidentes = document.getElementById("dias").value;

  const diasNoMes = 30;
  const anos = diasSemAcidentes / diasNoMes / 12;
  const meses = diasSemAcidentes / diasNoMes - anos * 12;
  const dias = diasSemAcidentes % diasNoMes;

  alert(
    "Essa fábrica está trabalhando a : " +
      anos.toFixed() +
      " ano(s), " +
      meses.toFixed() +
      " mês(es), " +
      dias.toFixed() +
      " dia(s) sem acidentes"
  );
});
