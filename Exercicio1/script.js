function calcularMedia() {
    // Obter valores das notas
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);
    let nota4 = parseFloat(document.getElementById("nota4").value);

    // Calcular a média
    let media = (nota1 + nota2 + nota3 + nota4) / 4;

    // Exibir o resultado na página
    document.getElementById("resultado").innerHTML = "A média do aluno é: " + media;
}