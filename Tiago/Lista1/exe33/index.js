document.getElementById("btn-exibir-nota").addEventListener("click", function() {
    const baseMaior  = (document.getElementById('baseMaior').value);
    const baseMenor  = (document.getElementById('baseMenor').value);
    const altura  = (document.getElementById('altura').value);

    const area = (baseMaior + baseMenor) * altura / 2;

    alert(' A área do trapézio é: ' + area);
});