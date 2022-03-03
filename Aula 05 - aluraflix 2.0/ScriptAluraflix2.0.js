let array = []
function addFilme(){
    var campoFilme = document.querySelector("input#link").value
    var campoNome = document.querySelector("input#nomeFilme").value
    console.log(campoFilme)
    console.log(campoNome)
    if(campoFilme.endsWith(".jpg")||campoFilme.endsWith(".png")){
        listarFilmesNaTela(campoFilme, campoNome) //passagem de parametro
       

    }
    else{
        alert("Endereço invalido, formatos aceitos: .jpg e .png")
    }
    document.querySelector("input#link").value = ""
    document.querySelector("input#nomeFilme").value = ""
}

function listarFilmesNaTela(filme, nome){ //recebmento de parametro pode ser diferente da variavel original
    var filmesArray = []
    filmesArray.push({'link':filme, 'nome' :nome})
    console.log(filmesArray['link'])
    var listaFilmes = document.querySelector("section#listaFilmes")
    /*for(var x = 0; x < filmesArray['link'].length; x++){
        var elemento = "<img src=" + filmesArray.link[x] + ">"
        listaFilmes.innerHTML = listaFilmes.innerHTML + elemento
        
    }*/
    guardar(filme) //chamado da função que guarda os valores no vetor fora das funções
    
}

function guardar(filmes){
    array.push(filmes)
}

function removFilme(){ //FUNÇÃO RESPONSAVEL POR PEGAR O VALOR DIGITADO NO INPUT DE REMOVER O FILME E TEXTAR SE O VALOR ESTÁ OU NAO NO ARRAY
    var campoRemov = document.querySelector("input#removlink").value

    if(array.indexOf(campoRemov) != -1){
        var indice = array.indexOf(campoRemov)
        remover(indice) //CHAMA A FUNÇÃO QUE REMOVE O LINK DO ARRAY E A IMAGEM DA TELA
    }
    else{
        alert("O link digitado nao foi encontrado na Biblioteca")
    }
    document.querySelector("input#removlink").value = ""
}

function remover(indice){
    array.splice(indice, 1)
    console.log(array)
    listaFilmes.innerHTML = ""
    for(var x = 0; x < array.length; x++){
        var elemento = "<img src=" + array[x] + ">"
        listaFilmes.innerHTML = listaFilmes.innerHTML + elemento
    }
}