document.getElementById("btn-exibir-valor").addEventListener("click", function() {
    const valorA  = parseInt(document.getElementById('valorA').value);
    const valorB  = parseInt(document.getElementById('valorB').value);
    const valorC  = parseInt(document.getElementById('valorC').value);

    const soma = valorA + valorB;

    if ( soma < valorC ) {
        document.write(' A soma de (' + valorA + ' + ' + valorB + ') que é igual a ' + soma + ' é menor do que ' + valorC)
    }else{
        document.write(' A soma de (' + valorA + ' + ' + valorB + ') que é igual a ' + soma + ' é maior do que ' + valorC)
    }
});