const pessoa = {
    nome: "José",
    idade: 26,
    maiorDeIdade: true,
    altura: 1.73
};


if (pessoa.idade < 18 ){
    console.log(`${pessoa.nome} é maior de idade`);
} else if (pessoa.idade < 60){
    console.log(`${pessoa.nome} é adulto`);
} else {
console.log(`${pessoa.nome} é idoso`)
}

//if (pessoa.idade < 18 ){
//    console.log(pessoa.nome + " é maior de idade");
//} else if (pessoa.idade < 60){
//    console.log(pessoa.nome + " é adulto");
//} else {
//console.log("A pessoa é idosa")
//}
