document.getElementById("btn-exibir-valor").addEventListener("click", function(){
    const qtdBlusas = document.getElementById('blusas').value;
    const qtdNovelos = document.getElementById('novelos').value;

    const novelosUsados = qtdNovelos / qtdBlusas;

    const totalNovelos= novelosUsados; 

    alert(' Foram usados ' + totalNovelos + ' novelos por blusa');
});