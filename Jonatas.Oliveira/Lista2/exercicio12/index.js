document.getElementById("botao").addEventListener("click", function () {
  const matricula = document.getElementById("matricula").value;
  const notaA = parseInt(document.getElementById("notaA").value);
  const notaB = parseInt(document.getElementById("notaB").value);
  const notaC = parseInt(document.getElementById("notaC").value);
  const mediaExercicios = parseInt(document.getElementById("me").value);

  const mediaAluno = (notaA + notaB * 2 + notaC * 3 + mediaExercicios) / 7;

  if (mediaAluno >= 9) {
    alert(
      "O aluno com o número de matricula = " +
        matricula +
        ", foi aprovado, sua média de aproveitamento é de = " +
        mediaAluno.toFixed(2)
    );
  } else if (mediaAluno >= 7.5 && mediaAluno < 9) {
    alert(
      "O aluno com o número de matricula = " +
        matricula +
        ", foi aprovado, sua média de aproveitamento é de = " +
        mediaAluno.toFixed(2)
    );
  } else if (mediaAluno >= 6 && mediaAluno < 7.5) {
    alert(
      "O aluno com o número de matricula = " +
        matricula +
        ", foi aprovado, sua média de aproveitamento é de = " +
        mediaAluno.toFixed(2)
    );
  } else if (mediaAluno >= 4 && mediaAluno < 6) {
    alert(
      "O aluno com o número de matricula = " +
        matricula +
        ", foi reprovado, sua média de aproveitamento é de = " +
        mediaAluno.toFixed(2)
    );
  } else if (mediaAluno <= 4) {
    alert(
      "O aluno com o número de matricula = " +
        matricula +
        ", foi reprovado, sua média de aproveitamento é de = " +
        mediaAluno.toFixed(2)
    );
  }
});
