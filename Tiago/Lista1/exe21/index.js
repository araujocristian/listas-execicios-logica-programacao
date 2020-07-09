document.getElementById("btn-exibir-valor").addEventListener("click", function(){
    const qtdLatas = document.getElementById('lata').value;
    const qtdGarrafas = document.getElementById('garrafa').value;
    const qtdGarrafas2= document.getElementById('garrafa2').value;


    const lata = 0.350;
    const garrafa = 0.600;
    const garrafa2 = 2;

    const totalLata = qtdLatas * lata;
    const totalGarrfa = qtdGarrafas * garrafa;
    const totalGarrafa2 = qtdGarrafas2 * garrafa2;


    const totalLitros = totalLata + totalGarrfa + totalGarrafa2;

    alert( 'Foram comprados ' + totalLitros + ' litros de refrigerante');
});