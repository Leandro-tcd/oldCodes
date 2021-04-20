//INVERSOR DE FRASES

const texto = "Eu gosto da Cubos Academy"
// Separar a frase utilizando os espaços
// Variável "palavra" começa vazia
let palavra = "";
//Cria-se um array para armazenar as palavras
const novaFrase = []
//Usa-se o for para varrer todo o comprimento da string
for (let i = 0; i < texto.length; i++){
// Se ele encontrar na string um 'espaço'
    if (texto[i] === " "){
// ele compreende que a palavra terminou daew armazena todos os indices anteriores ao espaço na variável palavra         
        novaFrase.push(palavra);
// Após o armazenamento da palavra, ela volta a ficar vazia para que seja possível continuar a verificação e armazenar a próxima palavra   
        palavra = "";
// continua a varrer o array buscando por mais palavras separadas por 'espaço'
        continue;
    }
// a variável soma todos os índices presentes no texto para formar a palavra    
    palavra += texto[i]
}
// a palavra formada ao final do 'FOR' é inserida no array "novaFrase"
novaFrase.push(palavra);

//=======Inverter a Frase=======

//Um novo array é construído
const fraseInvertida = []
// O 'FOR' é utilizado para fazer o caminho inverso do array criado para armazenar as palavras
// Nesse caso, o 'i' começa com o índice final do array 'novaFrase' e segue até o indice 0
for (let i = novaFrase.length -1; i >= 0; i--){
//Cada indice é inserido no novo array criado para armazenar as palavras da frase invertida        
    fraseInvertida.push(novaFrase[i])
}
// executa o array correspondente ao armazenamento da frase invertida
document.write(fraseInvertida)
