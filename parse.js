const fs = require('fs')

let content = fs.readFileSync('./shit.txt', 'utf8')
let lines = content.trim().split('\n')
console.log(lines)
let jsonString = '[' +
  lines.map(line => line) + ']'

console.log(jsonString)