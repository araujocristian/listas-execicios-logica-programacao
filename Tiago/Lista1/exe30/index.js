document.getElementById("btn-exibir-nota").addEventListener("click", function() {
    const salario = parseInt(document.getElementById('salario').value);
    const vendas = parseInt(document.getElementById('vendas').value);

    const comissao = (4/100 * vendas);
    const salarioFinal = salario + comissao;


    alert(' O valor do salário final é de: ' + salarioFinal + ' R$');
})