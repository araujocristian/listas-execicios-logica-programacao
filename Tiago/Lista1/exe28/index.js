document.getElementById("btn-exibir-nota").addEventListener("click", function() {
    const nota1 = document.getElementById('nota1').value;
    const nota2 = document.getElementById('nota2').value;

    const pesoN1 = 2;
    const pesoN2 = 3;

    const mediaPonderada = (pesoN1 * nota1 + pesoN2 * nota2)/5;

    alert('A nota do aluno é ' + mediaPonderada);
})