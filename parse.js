const fs = require('fs')

let content = fs.readFileSync('./shit.txt', 'utf8')
let jsonString = `[${content.trim().split('\n')}]`

console.log(jsonString)