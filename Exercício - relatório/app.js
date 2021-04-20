const pessoas =[
{
    nome: 'José',
    idade: 30
},
{
    nome:'Maria',
    idade: 16
},
{
    nome:'Pedro',
    idade:18
},
{
    nome:'André',
    idade:15
}
];


function criarRelatorio(lista){
    let maiores = 0;
    let menores = 0;

    for (let i of lista){
        const idade = i.idade;
        if (idade >= 18){
            maiores++;
        } else {
            menores++;
        }
    } 

    const resposta = {
        qtdMaiores: maiores,
        qtdMenores: menores,
        percMaiores: maiores/pessoas.length,
        percMenores: menores/pessoas.length
    };
document.write(Object.values(resposta));
}

criarRelatorio(pessoas)





// function criarRelatorio(lista){
//     for (let i of lista){
//         const idade = pessoas.idade
//         let maior = resposta.qtdMaiores
//         if (idade >= 18){
//             maior++
    
//         } else {
//             resposta.qtdMenores++ 
//         }
//     }
// document.write(resposta)
// }
// criarRelatorio(pessoas);