document.getElementById("btn-exibir-valor").addEventListener("click", function(){
    const moeda1Cent = document.getElementById('moeda1').value;
    const moeda5Cent = document.getElementById('moeda5').value;
    const moeda10Cent = document.getElementById('moeda10').value;
    const moeda25Cent = document.getElementById('moeda25').value;
    const moeda50Cent = document.getElementById('moeda50').value;
    const moeda1Real = document.getElementById('moedaReal').value;

    const cent1 = 0.1;
    const cent5 = 0.5;
    const cent10 = 0.10;
    const cent25 = 0.25;
    const cent50 = 0.50;
    const real = 1;

    const totalCent1 = moeda1Cent * cent1;
    const totalCent5 = moeda5Cent * cent5;
    const totalCent10 = moeda10Cent * cent10;
    const totalCent25 = moeda25Cent * cent25;
    const totalCent50 = moeda50Cent * cent50
    const totalReal = moeda1Real * real;


    alert( `O valor total é de:  ${totalCent1 + totalCent5 + totalCent10 + totalCent25
         + totalCent50 + totalCent50 + totalReal} R$
    ` )

});