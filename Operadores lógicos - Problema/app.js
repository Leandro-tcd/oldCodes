const pessoa = {
    nome: "josé",
    idade: 9,
    altura: 1.39
};
//====== REQUISITOS DO PROGRAMA======
//Altura mínima do brinquedo 1.40
//Idade mínima do brinquedo 12 anos
// ==================================

//========OPERADORES LÓGICOS==========
// && Significa "E" (true e true)
// || Significa "Ou" (True e False ou False e True)
// !  Significa "Negação" (Quando não é aquela coisa)


//if(pessoa.altura > 1.40 && pessoa.idade > 12){
//console.log(`${pessoa.nome} pode entrar no brinquedo`)
//} else {
//    console.log(`${pessoa.nome} não pode entrar no brinquedo`)
//}

// Outro método para se fazer  o mesmo programa

if (pessoa.altura > 1.40) {
    if (pessoa.idade > 12) {
        console.log(`${pessoa.nome} pode entrar no brinquedo`);
    } else {
        console.log(`${pessoa.nome}  não pode brincar por que não tem a altura mínima`);
    }
}   else {
    console.log(`${pessoa.nome} não pode brincar porque não tem a idade mínima`)
}