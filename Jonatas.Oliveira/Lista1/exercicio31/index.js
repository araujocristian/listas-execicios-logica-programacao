document.getElementById("botao").addEventListener("click", function () {
  const pesoPessoa = parseInt(document.getElementById("pesoPessoa").value);

  const engordouPorcentagem = (15 * pesoPessoa) / 100;
  const emagreceuPorcentagem = (20 * pesoPessoa) / 100;

  const engordou = pesoPessoa + engordouPorcentagem;
  const emagreceu = pesoPessoa - emagreceuPorcentagem;

  alert(
    "seu peso antes da quarentena começar era de " +
      pesoPessoa +
      "kg" +
      ", seu peso quando a quarentena acabou era de " +
      engordou +
      "kg" +
      ", depois de muito exercício praticado, seu peso atual é de " +
      emagreceu +
      "kg."
  );
});
