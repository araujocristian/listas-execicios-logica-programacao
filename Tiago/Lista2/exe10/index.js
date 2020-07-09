document
  .getElementById("btn-exibir-valor")
  .addEventListener("click", function () {
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;

    const altura2 = altura * altura;

    const imc = peso / altura2;

    if (imc < 18.5) {
      document.write("Você está magro, seu índice corporal é " + imc);
    } else {
      if (imc >= 18.5 && imc < 25) {
        document.write(
          "Você está com peso normal, seu índice corporal é " + imc
        );
      } else {
        if (imc >= 25 && imc < 30) {
          document.write(
            "Você está acima do peso, seu índice corporal é " + imc
          );
        } else {
          if (imc > 30) {
            document.write(
              "Você está com obesidade, seu índice corporal é " + imc
            );
          }
        }
      }
    }
  });
