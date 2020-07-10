document.getElementById("botao").addEventListener("click", function () {
  const paesVendidos = document.getElementById("quantidadePaes").value;
  const broasVendidas = document.getElementById("quantidadeBroas").value;
  const valorPao = 0.12;
  const valorBroa = 1.50;
  const vendaPaes = paesVendidos * valorPao;
  const vendaBroas = broasVendidas * valorBroa;
  const lucroDiario = vendaBroas + vendaPaes;
  const porcentagemPoupanca = 10 * lucroDiario;
  const guardarNaPoupanca = porcentagemPoupanca / 100;

  alert(
    "O lucro do dia foi de R$" +
      lucroDiario +
      ", e o valor a ser depositado na conta poupança é de R$" +
      guardarNaPoupanca
  );
});
