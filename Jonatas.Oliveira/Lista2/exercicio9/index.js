document.getElementById("botao").addEventListener("click", function () {
  const altura = document.getElementById("altura").value;
  const sexo = document.getElementById("sexo").value;

  const pesoIdealMasculino = (72.7 * altura) - 58;
  const pesoIdealFeminino = (62.1 * altura) - 44.7;

  if (sexo == "F") {
    alert("Seu peso ideal é de = " + pesoIdealFeminino);
  } else if (sexo == "M") {
    alert("Seu peso ideal é de = " + pesoIdealMasculino);
  }
});
