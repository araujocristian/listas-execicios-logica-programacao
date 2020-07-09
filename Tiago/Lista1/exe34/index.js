document.getElementById("btn-exibir-nota").addEventListener("click", function() {
    const ladoA  = (document.getElementById('ladoA').value);
    const ladoB  = (document.getElementById('ladoB').value);

    const area = ladoA * ladoB;

    alert(' A área do quadrado é: ' + area);
});