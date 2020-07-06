document.getElementById("btn-exibir-valor").addEventListener("click", function(){
    const numero = document.getElementById('numero').value;
    
    const centena = Math.trunc  (numero / 100);
    const dezena = Math.trunc ((numero % 100) / 10);
    const unidade = Math.trunc (((numero % 100) % 10));

    alert( 'CENTENA // ' + centena + '\n'+ ' DEZENA // ' + dezena + '\n' + ' UNIDADE // ' + unidade);
}); 