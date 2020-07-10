document.getElementById("botao").addEventListener("click", function () {
    const raio = document.getElementById("raio").value;
    const altura = document.getElementById("altura").value;
  
    const area = Math.PI * Math.pow(raio, 2)
    const volume = area * altura
  
    alert(volume);
  });
  