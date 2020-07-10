document.getElementById("botao").addEventListener("click", function () {
    const lado = document.getElementById("lado").value;

    const areaQuadrado = Math.pow(lado, 2)

    alert("A área do quadrado é de " + areaQuadrado + "cm²")
  
  });