document.getElementById("btn-exibir-lucro").addEventListener("click", function() {
    const qtdPaes = document.getElementById('paes').value;
    const qtdBroas = document.getElementById('broas').value;

    const valorPao = 0.12;
    const valorBroa = 1.50;

    const vendaPaes = qtdPaes * valorPao;
    const vendaBroas = qtdBroas * valorBroa;

    const valorVendas = vendaPaes + vendaBroas;
    const poupanca = 0.10 * valorVendas;
    alert('O total de vendas do més é: ' + valorVendas + 'reais' + ' O valor a ser poupado é : ' + poupanca );
})