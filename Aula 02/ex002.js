var res = document.querySelector("h2#valorConvertido")
var resBTC = document.querySelector("h2#valorBitcoin")
var valor = document.querySelector("input#valor")

function converter(){
    var valorEmReal = valor.value * 5.34
    res.innerHTML = `O valor U$${valor.value} é R$${valorEmReal}`
    var valorBitcoin = valor.value * 0.000023
    resBTC.innerHTML = `${valorBitcoin}BTC`
}

function converterEuro(){
    var valorEmEuro = valor.value * 0.85
    res.innerHTML = `O valor U$${valor.value} é igual á €${valorEmEuro}`
    var valorBitcoin = valor.value * 0.000023
    resBTC.innerHTML = `${valorBitcoin}BTC`
}