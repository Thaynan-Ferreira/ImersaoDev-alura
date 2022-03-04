let array = []
let nome = []
function addFilme(){
    var campoFilme = document.querySelector("input#link").value
    var nomeFilme = document.querySelector("input#nomeFilme").value

    if(campoFilme.endsWith(".jpg")||campoFilme.endsWith(".png") && nomeFilme != ''){
        listarFilmesNaTela(campoFilme, nomeFilme) //passagem de parametro
       

    }
    else if(nomeFilme == ''){
        alert("Digite o nome do filme")
    }
    else{
        alert("Endereço invalido, formatos aceitos: .jpg e .png")
    }
    document.querySelector("input#link").value = ""
    document.querySelector("input#nomeFilme").value = ""
}

function listarFilmesNaTela(filme, nome){ //recebmento de parametro pode ser diferente da variavel original
    var filmesArray = []
    var nomeArray = []
    nomeArray.push(nome)
    filmesArray.push(filme)
    var listaFilmes = document.querySelector("section#listaFilmes")
    for(var x = 0; x < filmesArray.length; x++){
        var elemento = "<img src=" + filmesArray[x] + "> " +"<p>"+ nomeArray[x] +"</p>"
        listaFilmes.innerHTML = listaFilmes.innerHTML + elemento
        
    }
    guardar(filme, nome) //chamado da função que guarda os valores no vetor fora das funções
    
}

function guardar(filmes, nomes){
    array.push(filmes)
    nome.push(nomes)
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
        var elemento = "<img src=" + array[x] + "> " +"<p>"+ nome[x] +"</p>"
        listaFilmes.innerHTML = listaFilmes.innerHTML + elemento
    }
}

