

function adicionarFilme(){
    var input = document.querySelector('input.value');
    var adicionarFilme() = document.querySelector('button')
    if (input.endsWith('.jpg')){
        listarFilmesNaTela(input)
    } else {
        alert('imagem inválida')
    }
    input = ''
}

function listarFilmesNaTela(filme){
    var listaFilmes = document.querySelector('#listaFilmes')
    var elementoFilme = '<img src=' + filme + '>'
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}