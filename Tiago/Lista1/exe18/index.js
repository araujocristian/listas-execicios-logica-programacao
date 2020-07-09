document.getElementById("btn-exibir-valor").addEventListener("click", function(){
    const horas = document.getElementById('horas').value;
    const extras = document.getElementById('extras').value;

    const horaTrabalhada = 10.00;
    const horaExtra = 15.00;

    const salarioBruto = horas * horaTrabalhada + extras * horaExtra;
    const salarioLiquido = salarioBruto - (10/100 * salarioBruto);

    alert('O valor do salário bruto é: ' + salarioBruto + ' R$' 
            + ' O valor do salário líquido é: ' + salarioLiquido + ' R$');
});