prompt = require("prompt-sync")()

let num = parseFloat(prompt('coloque o primeiro número: '))
let num2 = parseFloat(prompt('coloque o segundo número: '));
Math.abs(num - num2)
let diff = Math.abs(num - num2)
console.log('a diferença entre esses dois números é de', diff)
