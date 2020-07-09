document.getElementById("btn-exibir-nota").addEventListener("click", function() {
    const catetoAdjacente  = (document.getElementById('catetoA').value);
    const catetoOposto = (document.getElementById('catetoO').value);


    const hipotenusa = (catetoAdjacente * 2) + (catetoOposto * 2);


    alert(' O valor da hipotenusa é: ' + hipotenusa);
});