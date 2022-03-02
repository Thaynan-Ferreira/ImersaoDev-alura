function addFilme(){
    var campoFilme = document.querySelector("input#link").value

    if(campoFilme.endsWith(".jpg")||campoFilme.endsWith(".png")){
        var elemento = "<img src=" + campoFilme + ">"
        var listaFilmes = document.querySelector("section#listaFilmes")
        listaFilmes.innerHTML = listaFilmes.innerHTML + elemento
    }
    else{
        alert("Endereço invalido, formatos aceitos: .jpg e .png")
    }
    document.querySelector("input#link").value = ""
}