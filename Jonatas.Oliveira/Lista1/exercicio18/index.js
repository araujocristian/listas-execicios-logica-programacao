document.getElementById("botao").addEventListener("click", function () {
  const horaInicial = document.getElementById("horaInicial").value;
  const horaFinal = document.getElementById("horaFinal").value;
  const extraInicial = document.getElementById("extraInicial").value;
  const extraFinal = document.getElementById("extraFinal").value;

  const totalHora = horaFinal - horaInicial;
  const totalExtra = extraFinal - extraInicial;

  const calculoHora = totalHora * 10.0;
  const calculoExtra = totalExtra * 15.0;

  const salarioBruto = calculoHora + calculoExtra;
  const SalarioLiquido = salarioBruto - 0.1 * salarioBruto;

  alert(
    "O seu sálario bruto é de R$" +
      salarioBruto +
      ", e o seu sálario líquido é de R$" +
      SalarioLiquido + ".(diário)"
  );
});