document.getElementById("btn-exibir-valor").addEventListener("click", function() {
    const pesoRefeicao = document.getElementById('pesoRefeicao').value;

    const valorKilo = 12.00;
    const valorFinal = pesoRefeicao * valorKilo
    alert('O valor a ser pago é ' + valorFinal + ' reais');
})