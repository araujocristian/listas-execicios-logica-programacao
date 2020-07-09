document.getElementById("btn-exibir-nota").addEventListener("click", function() {
    const diagonalMaior  = (document.getElementById('diagonalMaior').value);
    const diagonalMenor  = (document.getElementById('diagonalMenor').value);

    const area = diagonalMaior * diagonalMenor/2

    alert(' A área do losango é: ' + area);
});