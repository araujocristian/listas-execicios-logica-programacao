document.getElementById("btn-exibir-valor").addEventListener("click", function() {
    const anoNasc = (document.getElementById('anoNasc').value);
    const anoAtual = (document.getElementById('anoAtual').value);

    const idadeAnos = anoAtual - anoNasc;
    const idadeMeses = idadeAnos * 12;
    const idadeDias = idadeAnos * 365;
    const idadeSemanas = idadeMeses * 4;

    alert( 'Idade em anos ' + idadeAnos + '.' 
            + ' Idade em meses ' + idadeMeses + '.'
            + ' Idade em dias '  + idadeDias + '.' 
             + ' Idade em semanas ' + idadeSemanas + '.')
});