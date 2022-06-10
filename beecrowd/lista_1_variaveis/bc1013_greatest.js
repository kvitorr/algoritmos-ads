import {input} from "./io_utils.js"

function main() {

    //Entrada de vários dados em uma linha
    const entr = input('DIgite o primeiro valor: ')

    //Separação dos dados através do .split
    const entradaCortada = entr.split(" ")

    //Os dados ''splitados'' são atribuidos as variáveis a,b e c
    const a = Number(entradaCortada[0])
    const b = Number(entradaCortada[1])
    const c = Number(entradaCortada[2])

    //Processamento
    const maiorAB = (a+b+Math.abs(a-b))/2

    const d = maiorAB

    const maiorABC = (d+c+Math.abs(d - c))/2

    //Saída
   console.log(`${maiorABC} eh o maior`)
}

main()