var thaynan = {nome:"Thaynan", vitorias:0, empates:0, derrotas:0, pontos:0}
var bela = {nome:"Bela", vitorias:0, empates:0, derrotas:0, pontos:0}

var jogadores =  [thaynan, bela]

bela.pontos = calcPontos(bela)
thaynan.pontos = calcPontos(thaynan)
function calcPontos(jogador){
    var pontos = (jogador.vitorias * 3) + jogador.empates
    return pontos
}

function exibeJogadoresNaTela (jogadores){
    var elemento = ""
    for (var i = 0; i < jogadores.length; i++){
        elemento += "<tr><td>" + jogadores[i].nome + "</td>"
        elemento += "<td>" + jogadores[i].vitorias + "</td>"
        elemento += "<td>" + jogadores[i].empates + "</td>"
        elemento += "<td>" + jogadores[i].derrotas + "</td>"
        elemento += "<td>" + jogadores[i].pontos + "</td>"
        elemento += "<td> <button onclick='addVitoria("+ i +")'>Vitória</button></td>"
        elemento += "<td> <button onclick='addEmpate("+ i +")'>Empate</button></td>"
        elemento += "<td> <button onclick='addDerrota("+ i +")'>Derrota</button></td></tr>"
    }
    var tabela = document.querySelector("tbody#tabelaJogadores") 
    tabela.innerHTML = elemento   
}
exibeJogadoresNaTela(jogadores)

function addVitoria(i){
    var jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calcPontos(jogador)
    exibeJogadoresNaTela(jogadores)
}
function addEmpate(i){
    var jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calcPontos(jogador)
    exibeJogadoresNaTela(jogadores)
}
function addDerrota(i){
    var jogador = jogadores[i]
    jogador.derrotas++
    exibeJogadoresNaTela(jogadores)
}