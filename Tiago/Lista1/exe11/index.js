document.getElementById("btn-exibir-valor").addEventListener("click", function(){
    const diasSemAcidentes = document.getElementById('dias').value;
    
    const anos =  diasSemAcidentes / 360;
    const mes = (diasSemAcidentes - (360 * anos )) / 30;
    const dias = (diasSemAcidentes - (360 * anos)) % 30;
    alert('Essa fábrica está trabalhando a : ' + anos + ' ano(s), ' + mes + ' mes(es), ' + dias + ' dia(s) sem acidentes');
}); 

