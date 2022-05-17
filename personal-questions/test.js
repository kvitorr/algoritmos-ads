import fs from 'fs'
const lines = fs.readFileSync('./input.txt', 'utf-8').split('\r\n')

var nomeDoVendedor = String(lines.shift()); var salarioFixo = parseFloat(lines.shift()); var vendasMes = parseFloat(lines.shift());

var totalReceber = parseFloat(salarioFixo + (vendasMes * 0.15)).toFixed(2)

console.log("TOTAL = R$" + totalReceber)