//Leia 2 datas (cada data é composta por 3 variáveis inteiras: dia, mês e ano) e escreva qual delas é a mais recente 

import { input } from "./io_utils.js";


function main(){
    const data = input("Digite a data atual (dd/mm/aaaa): ").split('/').map(Number)
    const data1 = input("Digite a primeira data para a análise (dd/mm/aaaa): ").split('/').map(Number)
    const data2 = input("Digite a segunda data para a análise (dd/mm/aaaa): ").split('/').map(Number)

    const data_manipulate1 = data_manipulation(data, data1)
    const data_manipulate2 = data_manipulation(data, data2)

    const data_mais_recente_var = data_mais_recente(data_manipulate1, data_manipulate2, data1, data2)
    if(data_mais_recente_var === false ){
        console.log("\tAs datas são iguais, logo, não existe uma mais recente")
    } else {
        console.log(`\tA data mais recente é ${data_mais_recente_var}`)
    } 
}

function data_manipulation(data1, data2){
    const [dia1, mes1, ano1] = data1
    const [dia2, mes2, ano2] = data2

    let dia_r, mes_r, ano_r

    dia_r = Math.abs(dia1 - dia2)
    mes_r = Math.abs(mes1 - mes2)
    ano_r = Math.abs(ano1 - ano2)

    const diferenca = [dia_r, mes_r, ano_r] 

    return diferenca
}

function data_mais_recente (data_m1, data_m2, data1, data2 ){
    const [dia1, mes1, ano1] = data_m1
    const [dia2, mes2, ano2] = data_m2

    if(ano1 > ano2){
        return data2.join("/")
    } else if (ano2 > ano1){
        return data1.join("/")
    } else if (mes1 > mes2){
        return data2.join("/")
    } else if (mes2 > mes1){
        return data1.join("/")
    } else if (dia1 > dia2){
        return data2.join("/")
    } else if (dia2 > dia1){
        return data1.join("/")
    } else {
        return false
    }
}

main()