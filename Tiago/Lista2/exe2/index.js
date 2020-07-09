document.getElementById("btn-exibir-valor").addEventListener("click", function() {
    const nome  = document.getElementById('nome').value;
    const civil  = document.getElementById('civil').value;
    const sexo  = document.getElementById('sexo').value;

    
    if ( sexo == 'feminino' && civil == 'casada' ) {
        const tempo  = prompt('Informe o tempo de casada: ');
        alert(nome + ', é ' + civil + ' a ' + tempo + ' anos')
    }else{
        alert(nome + ', ' + sexo + ' estado civíl ' + civil);
    }
});