document.getElementById("botao").addEventListener("click", function () {
  const quantidadeFrangos = document.getElementById("quantidadeFrangos").value;

  const anelChip = 4.00;
  const anelAlimento = 2 * 3.50;

  const gastoGranja = quantidadeFrangos * (anelChip + anelAlimento);

  alert("O valor total gasto com anéis para marcar os frangos da granja é de R$" + gastoGranja);
});
