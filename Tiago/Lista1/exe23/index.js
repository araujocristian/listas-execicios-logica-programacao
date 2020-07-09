document.getElementById("btn-exibir-valor").addEventListener("click", function(){
    const sombraPessoa = document.getElementById('sombraPessoa').value;
    const sombraPredio = document.getElementById('sombraPredio').value;
    const alturaPessoa = document.getElementById('alturaPessoa').value;

    const calcularSombra = sombraPredio/sombraPessoa;

    const alturaPredio = calcularSombra * alturaPessoa;

    alert(' A altura do prédio é ' + alturaPredio);
});