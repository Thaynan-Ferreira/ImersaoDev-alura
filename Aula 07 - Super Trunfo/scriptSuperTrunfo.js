let cartas = [
    {
        nome: "Bulbasauro",
        atributos: {
            Ataque: 7,
            Defesa: 8,
            Magia: 6
        }
    },
    {
        nome: "Pikachu",
        atributos: {
            Ataque: 8,
            Defesa: 5,
            Magia: 8
        }
    },
    {
        nome: "Dragonite",
        atributos: {
            Ataque: 9,
            Defesa: 7,
            Magia: 7
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
        opcoesTexto += `<input type='radio' name='atributo' value='${atributo}'> ${atributo}`
    }
    opcoes.innerHTML = opcoesTexto
}

function atributoSelect() {
    var radioAtributos = document.getElementsByName("atributo")
    
    for(var i = 0; i <radioAtributos.length; i++){
        if (radioAtributos[i].checked == true) {
            return radioAtributos[i].value
        }
    }
}

function jogar() {
    var atributo = atributoSelect()
    var atributoPlayer = cartaPlayer.atributos[atributo]
    var atributoMaquina = cartaMaquina.atributos[atributo]
    var resultado = document.querySelector("div#result")

    if (atributoPlayer > atributoMaquina){
        resultado.innerHTML = "<h2>Você ganhou</h2>"
    }
    else if (atributoPlayer == atributoMaquina) {
        resultado.innerHTML = "<h2>Você empatou</h2>"
    }
    else{
        resultado.innerHTML = "<h2>Você perdeu</h2>"
    }
}