prompt = require("prompt-sync")()

let hours = parseInt(prompt('quantas horas foram trabalhadas essa semana? '))
let value = parseFloat(prompt('qual o valor de cada hora trabalhada? '))
let month = (value * hours) * 4
let week = (value * hours)
console.log('por semana você recebe', week, 'reais por semana e', month, 'por mês')