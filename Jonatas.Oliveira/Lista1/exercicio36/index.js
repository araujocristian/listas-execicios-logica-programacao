document.getElementById("botao").addEventListener("click", function () {
  const salarioFuncionario = document.getElementById("salario").value;
  const salarioMinimo = document.getElementById("minimo").value;

  const quantidadeSalariosMinimos = salarioFuncionario / salarioMinimo;

  alert(
    "O total de sálarios mínimos que você recebe é de " +
      quantidadeSalariosMinimos.toFixed()
  );
});
