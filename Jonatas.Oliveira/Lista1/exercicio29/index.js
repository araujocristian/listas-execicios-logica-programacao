document.getElementById("botao").addEventListener("click", function () {
  const precoProduto = document.getElementById("preco").value;
  const nomeProduto = document.getElementById("nomeProduto").value;

  const desconto = (10 * precoProduto) / 100;
  const precoDescontado = precoProduto - desconto;

  alert(
    "PROMOÇÃO!!! " +
      nomeProduto +
      " de R$" +
      precoProduto +
      " por apenas R$" +
      precoDescontado +
      " aproveite!!!"
  );
});
