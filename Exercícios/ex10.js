prompt = require("prompt-sync")()

let num = parseInt(prompt('digite um número inteiro qualquer: '))
if(num % 2 == 0){
    console.log('esse número é par!')
}
else{
    console.log('esse número é impar!')
}
if(num == 0){
    console.log('tar ner você sabe que não dá pra resolver esse')
}