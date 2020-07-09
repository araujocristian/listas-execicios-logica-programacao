document.getElementById("btn-exibir-valor").addEventListener("click", function() {
    const numero  = parseInt(document.getElementById('numero').value);


    if ( numero % 2 === 0)  {
        alert(' O número é par ')
    }else{
        alert(' O número é impar')
    }
});