prompt = require("prompt-sync")()

let year = parseFloat(prompt("digite seu ano de nascimento: "))
let actual = new Date().getFullYear()
let age = (actual - year)
console.log('você tem', age, "anos")