document.getElementById("botao").addEventListener("click", function () {
  const salario = parseInt(document.getElementById("salario").value);
  const vendas = parseInt(document.getElementById("vendas").value);

  const comissao = (4 * vendas) / 100;
  const salarioFinal = salario + comissao;

  alert(
    "A sua comissão é de R$" +
      comissao +
      ", e o sálario a ser recebido é de R$" +
      salarioFinal
  );
});
