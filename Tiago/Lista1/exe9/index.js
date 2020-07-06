document.getElementById("btn-exibir-valor").addEventListener("click", function() {
    const camisetP = document.getElementById('camisetaP').value;
    const camisetM = document.getElementById('camisetaM').value;
    const camisetaG = document.getElementById('camisetaG').value;


    const lucro = camisetP * 10 + camisetM * 12 + camisetaG * 15

    alert('O valor total das vendas é ' + lucro);
})