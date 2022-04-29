import {input} from "./io_utils.js"

function main() {

    //Entradas
    const A = Number(input('DIgite o numero do funcionario: '))
    const B = Number(input('DIgite o seu numero de horas trabalhadas: '))
    const C = Number(input('DIgite o valor que recebe por horas trabalhadas '))

    //Processamento
    const salario = B * C

    //Saída
    console.log(`NUMBER = ${A}`)
    console.log(`SALARY = U$ ${salario.toFixed(2)}`)
}

main()