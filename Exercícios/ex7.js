prompt = require("prompt-sync")()

let value = parseFloat(prompt('qual o valor da sua compra? '))
let parc = parseInt(prompt('quantas parcelas serão? '))
let total = value/parc
console.log('o valor de cada parcela será de:', total, 'reais, sendo', parc, 'parcelas sem juros')