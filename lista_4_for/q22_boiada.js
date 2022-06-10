import { get_number } from "./utility.js"



function main(){

    const n = get_number('N: ')

    console.log(`\n=== Cadastro do 1º boi === `)
    let peso = get_number('Digite o peso do 1º boi: ')
    let id_number = get_number('Digite o número de identificação: ')

    let thinner = peso
    let fatter = peso

    let identificacao_thinner = id_number 
    let identificacao_fatter = id_number

    for (let index = 2; index <= n; index++) {
        console.log(`\n=== Cadastro do ${index}º boi === `)
        peso = get_number('Digite o peso do boi: ')
        id_number = get_number('Digite o número de identificação: ')

        if(peso > fatter){
            fatter = peso
            identificacao_fatter = id_number
        } else if(peso < thinner){
            thinner = peso
            identificacao_thinner = id_number
        }

    }

    console.log(`===== Resumo =====`)
    console.log(`\tBoi mais gordo: ID: ${identificacao_fatter}. Peso: ${fatter} kg`)
    console.log(`\tBoi mais magro: ID: ${identificacao_thinner}. Peso: ${thinner} kg`)


} main()