document.getElementById("botao").addEventListener("click", function () {
    const alturaPessoa = document.getElementById("alturaPessoa").value;
    const sombraPessoa = document.getElementById("sombraPessoa").value;
    const sombraPredio = document.getElementById("sombraPredio").value;

    const alturaPredio = (sombraPredio * alturaPessoa) / sombraPessoa;

    alert("A altura do prédio é de : " + alturaPredio.toFixed(2) + " metros.")
  });
  