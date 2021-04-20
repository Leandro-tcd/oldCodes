// Objetos 
// Constantes com mais de uma 
//informação em seu escopo são consideradas 
//objetos ou vetores

const pessoa = {
    nome: "José",
    idade: 30,
    maiorDeIdade: true,
    altura: 1.73
};
// Se quiser passar apenas uma informação do objeto
// deve-se colocar o Objeto.Propriedade
// ex.: pessoa.nome ou pessoa.idade

console.log(pessoa)

if (pessoa.idade >= 18 ){
    console.log("É maior de idade.")
} else {
    console.log("É menor de idade")
}

// outros comparadores
    // >=
    // <=
    // <
    // >
    // == igual (verifica só conteúdo)
    // != (diferente)
    // === identico (Verifica conteúdo e tipo)
    // !== não identico (verifica se não é identico)