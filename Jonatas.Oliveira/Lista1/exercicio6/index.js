document.getElementById("botao").addEventListener("click", function () {
    const pesoDaRefeição = document.getElementById("pesoEmKg").value;
    const precoKilo = 12.00;
    const pesoDoPrato = 0.810;
    const totalAPagar = pesoDaRefeição * precoKilo - pesoDoPrato;
  
    alert("O total a pagar é de: R$" + totalAPagar);
  });