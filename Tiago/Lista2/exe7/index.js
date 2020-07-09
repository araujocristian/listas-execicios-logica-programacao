document.getElementById("btn-exibir-valor").addEventListener("click", function() {
    const numero  = parseInt(document.getElementById('numero').value);


    if ( numero % 2 === 0)  {
        alert( numero + 5)
    }else{
        alert( numero + 8)
    }
});