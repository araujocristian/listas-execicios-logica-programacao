document.getElementById("btn-exibir-nota").addEventListener("click", function() {
    const precoProduto = document.getElementById('produto').value;

    const precoDesconto = precoProduto - (10/100 * precoProduto);

    alert(' O preço dp produto com desconto é: ' + precoDesconto + ' R$');
})