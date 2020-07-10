document.getElementById("botao").addEventListener("click", function () {
  const catetoMaior = parseInt(document.getElementById("catetoMaior").value);
  const catetoMenor = parseInt(document.getElementById("catetoMenor").value);

  const hipotenusa = Math.hypot(catetoMaior, catetoMenor)

  alert("A hipotenusa do triangulo é " + hipotenusa)
});
