let cartas = [
    {
        nome: "Bulbasauro",
        atributos: {
            ataque: 7,
            defesa: 8,
            magia: 6
        }
    },
    {
        nome: "Pikachu",
        atributos: {
            ataque: 8,
            defesa: 5,
            magia: 8
        }
    },
    {
        nome: "Dragonite",
        atributos: {
            ataque: 9,
            defesa: 7,
            magia: 7
        }
    }
]

var cartaMaquina
var cartaPlayer

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3)
    cartaMaquina = cartas[numeroCartaMaquina]

    var numeroCartaPlayer = parseInt(Math.random() * 3)
    while(numeroCartaMaquina == numeroCartaPlayer){
        var numeroCartaPlayer = parseInt(Math.random() * 3)
    }
    cartaPlayer = cartas[numeroCartaPlayer]
    console.log(cartaPlayer)

    document.querySelector("button#btnSortear").disabled = true
    document.querySelector("button#btnJogar").disabled = false

    exibirOpcoes()
}

function exibirOpcoes(){
    var opcoes = document.querySelector("div#opcoes")
    var opcoesTexto = ""

    for(var atributo in cartaPlayer.atributos){
        opcoesTexto += `<input type='radio' name='atributo' value='${atributo}'>`
    }
    opcoes.innerHTML = opcoesTexto
}