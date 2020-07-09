document
  .getElementById("btn-exibir-valor")
  .addEventListener("click", function () {
    const litro = document.getElementById("litro").value;

    const agua = (litro / 10) * 8;
    const maracuja = (litro / 10) * 2;

    alert(
      " Você ira precisa de " + agua + " L de agua e " + maracuja + " L de suco"
    );
  });
