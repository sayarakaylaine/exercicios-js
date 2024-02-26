// Vetor para armazenar objetos de alunos
const alunos = [];

// Função para adicionar um aluno
function adicionarAluno() {
    const matricula = document.getElementById('matricula').value;
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);

    // Criando objeto aluno
    const aluno = {
        matricula: matricula,
        nota1: nota1,
        nota2: nota2,
        calcularMedia: function () {
            return (this.nota1 + this.nota2) / 2;
        },
        situacao: function () {
            const media = this.calcularMedia();
            if (media > 7.0) {
                return "Aluno Aprovado";
            } else if (media === 7.0) {
                return "Aluno em Recuperação";
            } else {
                return "Aluno Reprovado";
            }
        }
    };

    alunos.push(aluno); // Adicionando aluno ao vetor

    // Exibindo informações do aluno na lista
    const listaAlunos = document.getElementById('listaAlunos');
    const li = document.createElement('li');
    li.textContent = `Matrícula: ${aluno.matricula}, Média: ${aluno.calcularMedia().toFixed(2)}, Situação: ${aluno.situacao()}`;
    listaAlunos.appendChild(li);

    // Calculando e exibindo a média geral
    calcularMediaGeral();
}

// Função para calcular a média geral dos alunos
function calcularMediaGeral() {
    let somaMedias = 0;

    for (let i = 0; i < alunos.length; i++) {
        somaMedias += alunos[i].calcularMedia();
    }

    const mediaGeral = somaMedias / alunos.length;
    const mediaGeralElement = document.getElementById('mediaGeral');
    mediaGeralElement.textContent = `Média Geral: ${mediaGeral.toFixed(2)}`;
}