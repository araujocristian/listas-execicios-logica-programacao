document.getElementById("botao").addEventListener("click", function () {
  const celsius = document.getElementById("celsius").value;

  const temperaturaFahrenheit = (celsius * 1.8) + 32;

  alert(celsius + " ºC equivale a " + temperaturaFahrenheit + " ºF")
});
