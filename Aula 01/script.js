 var nota1 = 7.5
 var nota2 = 7.8
 var nota3 = 4.3
 var nota4 = 2.7

 var mediaFinal = (nota1 + nota2 + nota3 + nota4) / 4
 console.log(mediaFinal.toFixed(1))

 if(mediaFinal > 6){
     console.log(`APROVADO, sua nota final é ${mediaFinal}`)
 }
 else{
     console.log(`REPROVADO, sua nota final É ${mediaFinal}`)
 }