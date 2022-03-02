var filmes = ["https://i.pinimg.com/originals/92/c8/e0/92c8e00b34fcfdeaf605a0647c21adb3.jpg", "https://upload.wikimedia.org/wikipedia/pt/thumb/0/00/Spider-Man_No_Way_Home_poster.jpg/250px-Spider-Man_No_Way_Home_poster.jpg", "https://upload.wikimedia.org/wikipedia/pt/thumb/9/90/Avengers_Infinity_War.jpg/250px-Avengers_Infinity_War.jpg"
]

filmes.push("https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/91/79/19/20163665.jpg")
filmes.push("https://image.tmdb.org/t/p/w600_and_h900_bestv2/lFx2i2pg1BoaD7grcpGDyHM1eML.jpg")
filmes.push("https://lumiere-a.akamaihd.net/v1/images/lady_and_the_tramp_partners_tile_ptb_p67_2000x3000_br_ea61c516.png?region=0%2C0%2C2000%2C3000")
filmes.push("https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/92/91/32/20224832.jpg")
filmes.push("https://upload.wikimedia.org/wikipedia/pt/2/28/Black_Panther_2018.jpg")
var link = document.querySelector("#link")

function add(){
    var texto = link.value
    filmes.push(String(texto))
    console.log(texto)
    console.log(filmes)
    document.write("<img src=" + filmes[7] +">" )
}


console.log(filmes)
for(var x = 0; x < filmes.length; x++){
    document.write("<img src=" + filmes[x] +">" )
}

