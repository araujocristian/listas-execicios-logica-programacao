document.getElementById("btn-exibir-valor").addEventListener("click", function() {
    const altura  = (document.getElementById('altura').value);
    const sexo  = (document.getElementById('sexo').value);


    if( sexo === masculino){
        const pesoIdealHomen = 72.2 * altura - 58;
        document.write('O seu pedo ideal é: ' + pesoIdealHomen);
    }else{
        if( sexo === feminino)
        const pesoIdealMulher = 62.1 * altura - 44.7;
        document.write('O seu pedo ideal é: ' + pesoIdealMulher);
    }
});