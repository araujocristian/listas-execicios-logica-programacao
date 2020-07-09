document.getElementById("btn-exibir-litragem").addEventListener("click", function() {
    const litroGas = document.getElementById('litroGas').value;
    const valorPago = document.getElementById('valorPago').value;

    const tanque = valorPago/litroGas;
    alert('Você abasteceu ' + tanque + ' litros de gasolina');
})