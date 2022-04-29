//Leia a quantidade de horas aula dadas por dois professores e o valor por hora recebido por cada um. Escreva na tela qual dos professores tem salário total maior

import {input} from './io_utils.js'

function main() {

    //Entradas
    const [horas_1, valor_1] = input("Digite a quantidade de horas dada pelo primeiro professor e o valor por hora recebido (ex.: 15 5): ").split(" ").map(Number)
    const [horas_2, valor_2] = input("Digite a quantidade de horas dada pelo segundo professor e o valor por hora recebido (ex.: 15 5): ").split(" ").map(Number)

    //Processamento
    const salario_1 = salario_total(horas_1, valor_1)
    const salario_2 = salario_total(horas_2, valor_2)


    if (salario_1 === salario_2){
        //Saídas
        console.log("\tOs salários são iguais")
    } else {
        if (maior_salario_1_maior_que_2(salario_1, salario_2)){
            //Saídas
            console.log('\tO salário do primeiro professor é maior do que o segundo')
        } else {
            //Saídas
            console.log('\tO salário do segundo professor é maior do que o primeiro')
        }
    }

} 

//Funções
const salario_total = (horas, valor) => {return (horas * valor)}

function maior_salario_1_maior_que_2(salario1, salario2){
    if(salario1 > salario2){
        return true
    } else if (salario2 > salario1){
        return false
    }
}


main()