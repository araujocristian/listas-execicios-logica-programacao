document.getElementById("botao").addEventListener("click", function () {
    const bMaior = parseInt(document.getElementById("baseMaior").value);
    const bMenor = parseInt(document.getElementById("baseMenor").value);
    const altura = parseInt(document.getElementById("altura").value);

    const somaBase = bMaior + bMenor;
    const areaTrapezio = (somaBase * altura) / 2;

    alert("A área do trapézio é de " + areaTrapezio + "cm²")
  
  });
  