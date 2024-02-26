function calcularAumento() {
    // Obter valor do salario
    let salarioInicial = parseFloat(document.getElementById("salarioInicial").value);

    // Calcular aumento
    let aumento = (salarioInicial + salarioInicial * 0.20)
    let descontoInss = (aumento * 0.08)
    let salarioFinal = (aumento - (aumento * 0.08))

    // Exibir o resultado na página
    document.getElementById("salarioInicial").innerHTML = "Seu salário inicial é: " +salarioInicial;
    document.getElementById("aumento").innerHTML = "Seu salário com o aumento é: " +aumento;
    document.getElementById("descontoInss").innerHTML = "O valor descontado do INSS foi: " +descontoInss;
    document.getElementById("salarioFinal").innerHTML = "O seu salário final é: " +salarioFinal;

}
