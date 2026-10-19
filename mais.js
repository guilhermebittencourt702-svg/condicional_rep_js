function calcularDesconto() {
    let compra = parseFloat(document.getElementById('valorCompra').value);
    let desconto = 0;
    let taxa = 0;

    if (compra > 500) {
        taxa = 10;
        desconto = compra * 0.10;
    } else if (compra > 100) {
        taxa = 5;
        desconto = compra * 0.05;
    } else {
        taxa = 0;
        desconto = 0;
    }

    let valorFinal = compra - desconto;

    document.getElementById('resultado').innerHTML = `
        Valor da compra: R$ ${compra.toFixed(2)}<br>
        Valor do desconto (${taxa}%): R$ ${desconto.toFixed(2)}<br>
        Valor com desconto: R$ ${valorFinal.toFixed(2)}
    `;
}