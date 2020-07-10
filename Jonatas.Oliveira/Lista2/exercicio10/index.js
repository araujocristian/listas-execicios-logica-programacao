document.getElementById("botao").addEventListener("click", function () {
  const peso = document.getElementById("peso").value;
  const altura = document.getElementById("altura").value;

  const imc = peso / Math.pow(altura, 2);

  if (imc <= 18.5) {
    alert(
      "Seu IMC é de " + imc.toFixed(2) + ", você está abaixo do peso ideal!"
    );
  } else if (imc > 18.5 && imc <= 25) {
    alert("Seu IMC é de " + imc.toFixed(2) + ", peso ideal!");
  } else if (imc > 25 && imc <= 30) {
    alert(
      "Seu IMC é de " + imc.toFixed(2) + ", você está acima do peso ideal!"
    );
  } else if (imc > 30) {
    alert("Seu IMC é de " + imc.toFixed(2) + ", você está obeso!");
  }
});
