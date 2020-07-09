document.getElementById("btn-exibir-valor").addEventListener("click", function() {
    const valorA  = parseInt(document.getElementById('valorA').value);
    const valorB  = parseInt(document.getElementById('valorB').value);
    const valorC  = parseInt(document.getElementById('valorC').value);

    if ( valorA > valorB){
        if ( valorB > valorC){
            document.write( valorA + ', ' + valorB + ', ' + valorC )
        }else{
            if ( valorA > valorC){
                document.write( valorA + ', ' + valorC + ', ' + valorB)
            }else{
                document.write( valorC + ', ' + valorA + ', ' + valorB)
            }
        }
    }else{
        if(valorB > valorC){
            if(valorA > valorC){
                document.write( valorB + ', ' + valorA + ', ' + valorC)
            }else{
                document.write( valorB + ', ' + valorC + ', ' + valorA)
            }
        }else{
            document.write( valorC + ', ' + valorB + ', ' + valorA)
        }
    }
});