document.getElementById("btn-exibir-dias").addEventListener("click", function() {
    const mes = document.getElementById('mes').value;
    const dia = document.getElementById('dia').value;

    const calcularDias = (mes - 1) * 30
    const diasPassados = calcularDias + dia;

    alert('Passaram-se ' + diasPassados + ' dias');
})