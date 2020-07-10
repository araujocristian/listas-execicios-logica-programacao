document.getElementById("botao").addEventListener("click", function () {
  const salarioAtual = parseInt(document.getElementById("salarioAtual").value);

  const porcentagemDeAumento = (salarioAtual * 15) / 100;
  const salarioAumento = salarioAtual + porcentagemDeAumento;

  const desconto = (salarioAumento * 8) / 100;
  const salarioComDesconto = salarioAumento - desconto;

  alert(
    "O seu sálario inicial era de R$" +
      salarioAtual +
      ", seu sálario com aumento é de R$" +
      salarioAumento +
      ", seu sálario com desconto é de R$" +
      salarioComDesconto
  );
});
