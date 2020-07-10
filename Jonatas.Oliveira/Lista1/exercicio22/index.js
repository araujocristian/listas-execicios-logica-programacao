document.getElementById("botao").addEventListener("click", function () {
  const moedas1 = document.getElementById("moedas1").value;
  const moedas5 = document.getElementById("moedas5").value;
  const moedas10 = document.getElementById("moedas10").value;
  const moedas25 = document.getElementById("moedas25").value;
  const moedas50 = document.getElementById("moedas50").value;
  const moedas1Real = document.getElementById("moedas1Real").value;

  const valorMoeda1 = 0.01 * moedas1;
  const valorMoeda5 = 0.05 * moedas5;
  const valorMoeda10 = 0.10 * moedas10;
  const valorMoeda25 = 0.25 * moedas25;
  const valorMoeda50 = 0.50 * moedas50;
  const valorMoeda1Real = 1.00 * moedas1Real;

  const valorTotal =
    valorMoeda1 +
    valorMoeda5 +
    valorMoeda10 +
    valorMoeda25 +
    valorMoeda50 +
    valorMoeda1Real;

  alert("Pedrinho, você tem R$" + valorTotal.toFixed(2) + " na sua poupança.");
});
