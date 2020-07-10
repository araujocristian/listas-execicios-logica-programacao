document.getElementById("botao").addEventListener("click", function () {
    const nome = document.getElementById("nome").value;
    const quantidadeLitros = document.getElementById("quantidadeLitros").value;
    const precoLitro = 3.80;
    const totalAPagar = quantidadeLitros * precoLitro;
  
    alert("senhor(a) " + nome + ", o total a pagar é de R$" + totalAPagar + ".");
  });
  