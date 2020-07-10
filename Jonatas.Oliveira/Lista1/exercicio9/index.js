document.getElementById("botao").addEventListener("click", function () {
  const tamanhoP = document.getElementById("tamanhoP").value;
  const tamanhoM = document.getElementById("tamanhoM").value;
  const tamanhoG = document.getElementById("tamanhoG").value;

  const valorP = 10.0;
  const valorM = 12.0;
  const valorG = 15.0;

  const pagamentoP = tamanhoP * valorP;
  const pagamentoM = tamanhoM * valorM;
  const pagamentoG = tamanhoG * valorG;

  const totalAPagar = pagamentoP + pagamentoM + pagamentoG;

  alert("O valor total de sua compra: R$" + totalAPagar);
});
