
document.getElementById("btn-exibir-area").addEventListener("click", function() {
    const base = document.getElementById('base').value;
    const altura = document.getElementById('altura').value;
    const area = base * altura;

    alert('A área do terreno é de: ' + area + 'metros.');
});