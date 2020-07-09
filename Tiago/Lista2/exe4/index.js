document.getElementById("btn-exibir-valor").addEventListener("click", function() {
    const valorA  = parseInt(document.getElementById('valorA').value);
    const valorB  = parseInt(document.getElementById('valorB').value);



    if ( valorA === valorB)  {
        const valorC = valorA + valorB
        document.write('A soma dos valores A e B é = ' + valorC)
    }else{
        const valorC = valorA * valorB
        document.write('A multiplicação dos valores A e B é = ' + valorC)
    }
});