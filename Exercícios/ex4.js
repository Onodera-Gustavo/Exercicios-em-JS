prompt = require("prompt-sync")()

let cel = parseFloat(prompt('digite a temperatura em celsius: '))
let fah = (cel * 9/5) + 32
let kev = cel + 273
console.log('essa temperatura em fahrenheit e em kelvin fica, respectivamente', fah+'°', "e", kev+'°')