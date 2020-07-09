
document.getElementById("btn-exibir-ferraduras").addEventListener("click", function() {
    const qtdCavalos = document.getElementById('cavalos').value;
    const qtdFerraduras = qtdCavalos * 4;

    alert('A quantidade de ferraduras necessárias é: ' + qtdFerraduras);
})