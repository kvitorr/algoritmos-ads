//Leia a data atual (dia, mes e ano) e a data de nascimento (dia, mes e ano) de uma pessoa, calcule e escreva sua idade exata (em anos)

import { input } from "./io_utils.js"

function main(){

    //Entradas
    const [da_dia, da_mes, da_ano] = input("Digite a data atual (ex.: 15/04/2022): ").split("/").map(Number)
    const [dn_dia, dn_mes, dn_ano] = input("Digite a sua data de nascimento (ex.: 01/03/2000): ").split("/").map(Number)

    //Processamento
    let aniversario

    aniversario = idade(dn_dia, dn_mes, dn_ano, da_dia, da_mes, da_ano)


    //Saídas
    console.log(`\nIdade: ${aniversario}\n`)
} 

function idade(nasc_dia_1, nasc_mes_2, nasc_ano_3, atual_dia_1, atual_mes_2, atual_ano_3){
    
    let aniversario = atual_ano_3 - nasc_ano_3
    
    if(atual_dia_1 < nasc_dia_1 && atual_mes_2 <= nasc_mes_2){
        aniversario += -1 
    }

    return aniversario
}


main()