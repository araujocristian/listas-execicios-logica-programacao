document.getElementById("btn-exibir-valor").addEventListener("click", function() {
    const salarioJoao = (document.getElementById('salarioJoao').value);

    const conta1 = 200 + (2/100);
    const conta2 = 120 + (2/100);
    const totalContas = conta1 + conta2;
    

    const resto = salarioJoao - totalContas ;

    alert(' Sobrará para joão ' + resto + ' R$')
});
