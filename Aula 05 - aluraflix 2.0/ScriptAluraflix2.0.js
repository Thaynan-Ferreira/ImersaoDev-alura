function addFilme(){
    var campoFilme = document.querySelector("input#link").value

    if(campoFilme.endsWith(".jpg")||campoFilme.endsWith(".png")){
        listarFilmesNaTela(campoFilme) //passagem de parametro
    }
    else{
        alert("Endereço invalido, formatos aceitos: .jpg e .png")
    }
    document.querySelector("input#link").value = ""
}

function listarFilmesNaTela(filme){ //recebmento de parametro pode ser diferente da variavel original
    var elemento = "<img src=" + filme + ">"
        var listaFilmes = document.querySelector("section#listaFilmes")
        listaFilmes.innerHTML = listaFilmes.innerHTML + elemento
}