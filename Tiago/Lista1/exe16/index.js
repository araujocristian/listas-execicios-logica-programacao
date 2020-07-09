document.getElementById("btn-exibir-valor").addEventListener("click", function(){
    const qtdSandubas = document.getElementById('sanduba').value;

    const queijo = 0.100;
    const presunto = 0.050;
    const hamburguer = 0.100;

    const qtdQueijo = queijo * qtdSandubas;
    const qtdPresunto = presunto * qtdSandubas;
    const qtdHamburguer = hamburguer * qtdSandubas;

    alert( 'Compre ' + qtdQueijo +
     ' kg de queijo, ' + qtdPresunto + 
     ' kg de presunto e ' + qtdHamburguer + ' kg de carne.');
}); 
