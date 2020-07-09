document.getElementById("btn-exibir-dias").addEventListener("click", function() {
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;

    const idadeDias = idade * 365;
    alert(nome + ', você ja viveu ' + idadeDias + ' dias.');
})