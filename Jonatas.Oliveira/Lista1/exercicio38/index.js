document.getElementById("botao").addEventListener("click", function () {
  const anoNascimento = document.getElementById("nascimento").value;
  const anoAtual = document.getElementById("atual").value;

  const anosVividos = anoAtual - anoNascimento;
  const mesesVividos = anosVividos * 12;
  const diasVividos = anosVividos * 365;
  const semanasVividas = anosVividos * 48;

  alert(
    "Sua idade em anos é " +
      anosVividos +
      ", sua idade em meses é " +
      mesesVividos +
      ", sua idade em semanas é " +
      semanasVividas +
      ", sua idade em dias é " +
      diasVividos
  );
});
