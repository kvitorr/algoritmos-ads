import { get_number } from "./utility.js"



function main(){

    const n = get_number('N: ')
    let salario
    let qtd_de_filhos

    let salario_total = 0
    let filhos_total = 0
    let cont_salario_ate_que_mil = 0

    for (let index = 0; index < n; index++) {

        console.log('\nNovo habitante =========')
        salario = get_number('Salario: ')
        qtd_de_filhos = get_number('Quantidade de filhos: ')

        salario_total += salario
        filhos_total += qtd_de_filhos

        if(salario <= 1000){
            cont_salario_ate_que_mil++
        }


    }

    const media_salarial = media(salario_total, n)
    const media_filhos = media(filhos_total, n)
    const percentual_ate_mil = cont_salario_ate_que_mil/n * 100

    console.log('\nResumo ======')
    console.log(`\tMedia salarial:                              ${media_salarial.toFixed(2)}`)
    console.log(`\tMedia filhos:                                ${media_filhos.toFixed(2)}`)
    console.log(`\tPercentual, salários até R$ 1000:            ${percentual_ate_mil.toFixed(2)} %`)


} 


const media = (total, qtd_de_pessoas) => {return total/qtd_de_pessoas}



main()