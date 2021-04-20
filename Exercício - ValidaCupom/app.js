// Cupom RANGOBARATO
// Apenas das 12h as 13:59 
// se tiver cupo e tiver dentro do horário, tem 10% de desconto
// se além disso, a compra for 100 reais ou mais, desconto de 20%

function imprimirValorDoDesconto(valorDaCompra, hora, cupom){
    if (valorDaCompra >= 100 && 12 < hora && hora< 14 && cupom === "RANGOBARATO"){
        document.write(`O valor do seu desconto é de: ${valorDaCompra * 20/100}`)
    } else if(valorDaCompra < 100 && 12 < hora && hora < 14 && cupom === "RANGOBARATO"){
        document.write(`O valor do seu desconto é de: ${valorDaCompra * 10/100}`)
    } else {
        document.write(`CUPOM INVÁLIDO OU FORA DO HORÁRIO DE VALIDAÇÃO. POR FAVOR, CHEQUE AS INFORMAÇÕES DA PROMOÇÃO`)
    }
}

imprimirValorDoDesconto(150, 13, "RANGOBARATO")

//document.write(`O valor do seu desconto é` ${})