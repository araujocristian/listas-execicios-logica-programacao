document.getElementById("btn-exibir-valor").addEventListener("click", function(){
    const salario = parseInt(document.getElementById('salario').value);
    
    const aumento = salario * 15/100;

    const salarioComAumento = salario + aumento;

    const salarioFinal = salarioComAumento - (8/100 * salarioComAumento);

    alert('O salário inicial é: ' + salario + ', o salário com aumento é '
             + salarioComAumento + ', o salário final é ' + salarioFinal);
}); 