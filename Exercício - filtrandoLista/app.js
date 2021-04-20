// Filtrar elementos que começam com a letra "A"

const lista = ["Arroz", "Batata", "Amora"]
const result = []

// Push = coloca um elemento no final da lista
//result.push("Mandioca")

//Pop = Retira um elemento do final da lista
//result.pop()

for (let i of lista){
    if (i[0] === "A" || i[0] === "a")
        result.push(i)
}
document.write(result)