var jogadores =  [{nome:"Thaynan", vitorias:2, empates:0, derrotas:2, pontos:0}, {nome:"Bela", vitorias:3, empates:0, derrotas:1, pontos:0}]
var thaynan = {nome:"Thaynan", vitorias:2, empates:0, derrotas:2, pontos:0}
var bela = {nome:"Bela", vitorias:3, empates:0, derrotas:1, pontos:0}

bela.pontos = calcPontos(bela)
thaynan.pontos = calcPontos(thaynan)
function calcPontos(jogador){
    var pontos = (jogador.vitorias * 3) + jogador.empates
    return pontos
}

console.log(bela)
console.log(thaynan)

console.log(jogadores)