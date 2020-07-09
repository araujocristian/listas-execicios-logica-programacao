document
  .getElementById("btn-exibir-valor")
  .addEventListener("click", function () {
    const valorCompra = parseInt(document.getElementById("valorCompra").value);
    const formaPagamento = document.getElementById("formaPagamento").value;

    const dinheiroCheque = (10 * valorCompra) / 100;
    const credito = (15 * valorCompra) / 100;
    const duasVezes = valorCompra / 2;
    const tresVezes = (valorCompra + dinheiroCheque) / 3;

    if( formaPagamento == 1){
        const total = valorCompra - dinheiroCheque;
        document.write('Você tem 10% de desconto, o valor a pagar é de: ' + total + ' R$');
    }else if(formaPagamento == 2){
        const total = valorCompra - credito;
        document.write('Você tem 15% de desconto, o valor a pagar é de: ' + total + ' R$');
    }else if(formaPagamento == 3){
        document.write('O valor a pagar é de duas parcelas de : ' + duasVezes + ' R$');   
    }else if(formaPagamento == 4){
        document.write('O valor a pagar é de três parcelas de : ' + tresVezes.toFixed(2) + ' R$');
    }
  });
 