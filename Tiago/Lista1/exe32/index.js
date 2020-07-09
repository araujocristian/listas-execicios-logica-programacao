document.getElementById("btn-exibir-nota").addEventListener("click", function() {
    const peso  = parseInt(document.getElementById('peso').value);

    const pesoGrama = peso * 1000;
    alert(' O peso informado em gramas é: ' + pesoGrama + ' gr');
});