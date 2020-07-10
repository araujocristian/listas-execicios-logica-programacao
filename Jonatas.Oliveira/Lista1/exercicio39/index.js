document.getElementById("botao").addEventListener("click", function () {
  const salario = parseInt(document.getElementById("salario").value);
  const c1 = parseInt(document.getElementById("conta1").value);
  const c2 = parseInt(document.getElementById("conta2").value);

  const juros1 = (c1 * 2) / 100;
  const juros2 = (c2 * 2) / 100;

  const pagamentoConta = salario - (c1 + juros1);
  const salarioFinal = pagamentoConta - (c2 + juros2);

  alert(
    "O sálario final, depois de pagas todas suas contas é de R$" + salarioFinal
  );
});
