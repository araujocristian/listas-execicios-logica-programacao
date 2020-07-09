document.getElementById("btn-exibir-nota").addEventListener("click", function() {
    const peso  = parseInt(document.getElementById('peso').value);

    const pesoNovo15 = peso + (15/100 * peso);
    const pesoNovo20 = peso + (20/100 * peso)


    alert(' O novo peso se a pessoa engordar 15% é ' + pesoNovo15 + ' kg.' + ' E o novo peso se a pessoa engordar 20% é ' + pesoNovo20 + ' kg');
});