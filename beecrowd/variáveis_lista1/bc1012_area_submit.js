import fs from 'fs';

const input = fs.readFileSync('./inputs/bc1012_input.txt', 'utf8')
const lines = input.split('\n')

function main() {
    
    const entr = lines[0]
    const entradaCortada = entr.split(" ")
    
    const A = Number(entradaCortada[0])
    const B = Number(entradaCortada[1])
    const C = Number(entradaCortada[2])
    const pi = 3.14159

    const atri = (A*C)/2
    const circ = (pi*C*C)
    const atrap = ((A+B)*C)/2
    const aquad = B*B
    const aret = A*B 

    console.log(`TRIANGULO: ${atri.toFixed(3)}`)
    console.log(`CIRCULO: ${circ.toFixed(3)}`)
    console.log(`TRAPEZIO: ${atrap.toFixed(3)}`)
    console.log(`QUADRADO: ${aquad.toFixed(3)}`)
    console.log(`RETANGULO: ${aret.toFixed(3)}`)

}

main()