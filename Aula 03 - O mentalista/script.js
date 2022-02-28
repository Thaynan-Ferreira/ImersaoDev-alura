var res = (document.querySelector("h2#resposta"))
var numSecreto = parseInt(Math.random() * 11)
console.log(numSecreto)

function chutar(){
    var chute = parseInt(document.querySelector("input#valor").value)
    if (chute == numSecreto) {
        res.innerHTML = `Parabens o valor secreto é ${numSecreto}`
    }

    else if (chute > 10 || chute < 0) {
        res.innerHTML = `o numero ${chute} não está entre 0 e 10`
    }

    else {
        res.innerHTML = `você errou!` 
    }
}