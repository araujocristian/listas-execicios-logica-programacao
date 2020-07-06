document.getElementById("btn-exibir-nota").addEventListener("click", function() {
    const nota1 = document.getElementById('nota1').value;
    const nota2 = document.getElementById('nota2').value;
    const nota3 = document.getElementById('nota3').value;


    const mediaPonderada = (1 * nota1 + 2 * nota2 + 3 * nota3)/6

    alert('A nota do aluno é ' + mediaPonderada);
})