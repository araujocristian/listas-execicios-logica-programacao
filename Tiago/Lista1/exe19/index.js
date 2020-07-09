document.getElementById("btn-exibir-valor").addEventListener("click", function(){
    const qtdFrangos = document.getElementById('frango').value;

    const anelDireito = 4.00;
    const anelEsquerdo = 3.50 * 2;

    const gastoTotal = qtdFrangos * anelDireito + qtdFrangos * anelEsquerdo; 

    alert( 'O valor total para marcas todas as aves é de ' + gastoTotal + ' R$.' );
});