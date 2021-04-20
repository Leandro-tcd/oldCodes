var nomeInput = document.querySelector('input')
var cheq = document.querySelector('button')

function adicionarNomeDoPlayer(input){ 
  var dadoPlayer = nomeInput.value
  var infoPlayer = {
    nome: dadoPlayer,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  }
  jogadores.push(infoPlayer);
  tabelaDePontos(jogadores)
}

var jogadores = []

cheq.onclick = adicionarNomeDoPlayer

function tabelaDePontos(jogadores){
  var html=''
  for (i=0; i < jogadores.length; i++){
      html += '<tr><td>' + jogadores[i].nome + '</td>'
      html += '<td>' + jogadores[i].vitorias + '</td>'
      html += '<td>' + jogadores[i].empates + '</td>'
      html += '<td>' + jogadores[i].derrotas + '</td>'
      html += '<td>' + jogadores[i].pontos + '</td>'
      html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
      html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
      html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>" 
  }
  var tabelaDeJogadores = document.getElementById('tabelaDeJogadores');
  tabelaDeJogadores.innerHTML = html
}

tabelaDePontos(jogadores)

function calcularPontos(jogador){
  var pontos = (jogador.vitorias * 3) + jogador.empates
  return pontos ;
}

function adicionarVitoria(i){
  var jogador = jogadores[i]
  jogador.vitorias++
  jogador.pontos = calcularPontos(jogador);
tabelaDePontos(jogadores)
}

function adicionarEmpate(i){
  var jogador = jogadores[i]
  jogador.empates++
  jogador.pontos = calcularPontos(jogador);
  tabelaDePontos(jogadores)
}

function adicionarDerrota(i){
  var jogador = jogadores[i]
  jogador.derrotas++
  jogador.pontos = calcularPontos(jogador);
  tabelaDePontos(jogadores)
}