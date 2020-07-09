document.getElementById("btn-exibir-valor").addEventListener("click", function() {
    const numeroMultiplicar = (document.getElementById('numero').value);

   for (let inicio = 1; inicio < 11; inicio++){
        document.write( numeroMultiplicar + ' x ' + inicio + ' = ' + (numeroMultiplicar * inicio) + '<br/>')
   }
});

            