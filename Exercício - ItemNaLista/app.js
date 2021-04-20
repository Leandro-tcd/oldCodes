// Loop - (for of) exercício

const listaDeCompras = ["Arroz", "Feijão", "Banana", "Farinha"]

for (let i of listaDeCompras){
    document.write(`Verificando ítens: ${[i]} <br>`)
    if (i === "Banana"){    
        document.write(`${i} está na lista <br>`)
    break
    }
}