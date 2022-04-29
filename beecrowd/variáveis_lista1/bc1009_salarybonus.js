import {input} from "./io_utils.js"

function main() {

    //Entradas
    const A = input('DIgite o nome do funcionario: ')
    const B = Number(input('DIgite o valor do seu salário fixo: '))
    const C = Number(input('DIgite o total de vendas realizadas no mês '))

    //Processamento
    const salarioFinal = B + (C * 0.15)

    //Saídas
    console.log(`TOTAL = R$ ${salarioFinal}`)
}

main()