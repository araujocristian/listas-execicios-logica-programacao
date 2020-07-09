document.getElementById("btn-exibir-valor").addEventListener("click", function(){
    const tempCelsius = document.getElementById('celsius').value;


    const tempFahrenheit = tempCelsius * 9/5 + 32;

    alert('A temperatura em fahrenheit é: ' + tempFahrenheit + ' graus')
});