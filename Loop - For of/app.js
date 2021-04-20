// Loop - for of (para cada ítem da lista de compra)

const listaDeCompras = ["Arroz","Batata", "Banana"];

// A cara interação, o que existe na listadecompras
//será guardada na variável "i", executando uma de cada vez
//o primeiro loop ele pega o indice 0, no segundo o 1...
//até completar toda a extensão do array

//INDICAÇÃO DE USO
// quando se quer varrer uma lista inteira, porém, não precisa
//especificar o índice

for (let i of listaDeCompras){
    console.log(i)
}