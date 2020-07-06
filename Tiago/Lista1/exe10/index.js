document.getElementById("btn-exibir-valor").addEventListener("click", function() {
    const xA = document.getElementById('xA').value;
    const xB = document.getElementById('xB').value;
    const yA = document.getElementById('yA').value;
    const yB = document.getElementById('yB').value;


    const distacia = Math.sqrt (xA - xB) + (yA - yB); 

    alert('A distânca entre o ponto A e o ponto B é: ' + distacia);
})