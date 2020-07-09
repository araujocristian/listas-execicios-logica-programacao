document.getElementById("btn-exibir-valor").addEventListener("click", function() {
    const salarioMinimo = (document.getElementById('salarioM').value);
    const salarioFuncionario  = (document.getElementById('salarioF').value);

    const qtdSalarios = salarioFuncionario / salarioMinimo;

    alert(' O funcionário recebe: ' + qtdSalarios + ' salários mínimos.');
});