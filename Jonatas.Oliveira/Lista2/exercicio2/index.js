document.getElementById("botao").addEventListener("click", function () {
  const nome = document.getElementById("nome").value;
  const estadoCivil = document.getElementById("estadoCivil").value;
  const sexo = document.getElementById("sexo").value;

  if(estadoCivil == "casada" && sexo == "feminino") {
    const anos = prompt("Por favor informe o tempo de casada: ")
    alert("A " + nome + ", está " + estadoCivil + " a exatos " + anos + " anos.")
  } else {
    alert(nome + ", do sexo " + sexo + ", está " + estadoCivil + ".")
  }
});
