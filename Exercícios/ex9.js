prompt = require("prompt-sync")()

let value = parseFloat(prompt('qual o valor da sua compra? '))
let parc = parseInt(prompt('quantas parcelas serão? '))
let tax = parseFloat(prompt('qual a taxa de juros mensal? '))
let total = value/parc
let total2 = total + (tax/100 * total)
let total3 = total2 * parc
console.log('o valor de cada parcela será de:', total2, 'com uma taxa de juros de', tax+'%','ao mês, com', parc, 'parcelas, resultando num total de', total3,'reais')
