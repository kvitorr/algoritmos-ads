//12. Leia o salário de um trabalhador e escreva seu novo salário com um aumento de 25%.

import {input, print} from "./io_utils.js"

function main() {

    //Entrada
    const salario = Number(input('Digite o salário de um trabalhador em R$: '))

    //Saída
    print(`Salário com aumento de 25%: R$ ${salario * 1.25}`)

} main()
