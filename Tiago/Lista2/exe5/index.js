document.getElementById("btn-exibir-valor").addEventListener("click", function() {
    const numero  = parseInt(document.getElementById('valor').value);

    const valorX2 = numero * 2;
    const valorX3 = numero * 3;
    const resultado = valorX2;

    if ( numero % 2 == 0 && valorX2 == resultado )  {
        document.write('O número é POSITIVO e seu DOBRO é ' + valorX2)
    }else{
        document.write('O número é NEGATIVO e seu TRIPLO é ' + valorX3)
    }
});