prompt = require("prompt-sync")()

let name = prompt("digite o nome do produto: ")
let price = parseFloat(prompt("digite o preço do produto: "))
let amount = parseInt(prompt("quantos desse você vai levar? "))
let price2 = (price * amount)
let tax = price2 + (18/100 * price)
console.log('o preço após os 18% de impostos será de:', tax, 'reais, você está levando', amount, 'unidades de', name, 'que custam', price, 'reais cada')