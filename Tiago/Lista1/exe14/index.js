document.getElementById("btn-exibir-valor").addEventListener("click", function(){
    const raio = document.getElementById('raio').value;

    const area = Math.PI * Math.pow(raio, 2);
    alert( 'A área da pizza é de: ' + area );
});