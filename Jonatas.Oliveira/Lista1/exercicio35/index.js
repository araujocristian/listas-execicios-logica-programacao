document.getElementById("botao").addEventListener("click", function () {
    const dMaior = document.getElementById("maior").value;
    const dMenor = document.getElementById("menor").value;

    const areaLosango = (dMaior * dMenor) / 2;

    alert("A área do losando é de " + areaLosango)
  
  });