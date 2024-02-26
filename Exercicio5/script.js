// Função para calcular quanto cada amigo deve pagar
function calcularPagamento() {
    const valorTotal = parseFloat(document.getElementById('valorTotal').value);

    // Calcula o valor que cada amigo deve pagar
    const valorPorAmigo = valorTotal / 3;
    const valorCarlos = Math.floor(valorPorAmigo); // Carlos não paga centavos
    const valorAndre = Math.floor(valorPorAmigo);  // André não paga centavos
    const valorFelipe = valorTotal - valorCarlos - valorAndre;

    // Exibe os valores na página
    document.getElementById('carlosPagamento').textContent = `Carlos: R$ ${valorCarlos.toFixed(2)}`;
    document.getElementById('andrePagamento').textContent = `André: R$ ${valorAndre.toFixed(2)}`;
    document.getElementById('felipePagamento').textContent = `Felipe: R$ ${valorFelipe.toFixed(2)}`;
}