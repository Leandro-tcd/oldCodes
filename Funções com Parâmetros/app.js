// Função com parâmetro


// A variável "nome" pertence apenas ao escopo da função cumprimentarPessoa
function cumprimentarPessoa(nome){
    document.write(`Olá, ${nome}`);
}

// Tudo que estiver dentro do parenteses ao chamar a função
//será atribuído como parâmetro para a execução da mesma
//Nesse caso, ao chamar a função, passando o parâmetro "José"
// A função é executada recebendo o que lhe foi passado.

cumprimentarPessoa("José")
cumprimentarPessoa("Maria")