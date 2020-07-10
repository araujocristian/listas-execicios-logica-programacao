document.getElementById("botao").addEventListener("click", function () {
  const formaPagamento = document.getElementById("pagamento").value;
  const precoProduto = parseInt(document.getElementById("produto").value);

  const opcao1 = (10 * precoProduto) / 100;
  const opcao2 = (15 * precoProduto) / 100;
  const opcao3 = precoProduto / 2;
  const opcao4 = (precoProduto + opcao1) / 3;

  if (formaPagamento == 1) {
    const totalPagar1 = precoProduto - opcao1;
    alert(
      "Você escolheu a opção 1," +
        " pagamento será á vista em dinheiro ou cheque e" +
        " você terá 10% de desconto," +
        " o total a pagar é de R$" +
        totalPagar1
    );
  } else if (formaPagamento == 2) {
    const totalPagar2 = precoProduto - opcao2;
    alert(
      "Você escolheu a opção 2," +
        " pagamento será á vista no cartão de crédito e" +
        " você terá 15% de desconto," +
        " o total a pagar é de R$" +
        totalPagar2
    );
  } else if (formaPagamento == 3) {
    alert(
      "Você escolheu a opção 3," +
        " pagamento será em 2x sem juros, " +
        " o valor de cada parcela é de R$" +
        opcao3
    );
  } else if (formaPagamento == 4) {
    alert(
      "Você escolheu a opção 4," +
        " pagamento será em 3x com juros de 10%, " +
        " o valor de cada parcela com juros é de R$" +
        opcao4.toFixed(2)
    );
  }
});
