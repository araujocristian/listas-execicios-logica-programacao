document.getElementById("botao").addEventListener("click", function () {
  const raio = document.getElementById("raioPizza").value;

  const area = Math.PI * Math.pow(raio, 2);
  
  alert("A área da pizza é de: " + area);
});
