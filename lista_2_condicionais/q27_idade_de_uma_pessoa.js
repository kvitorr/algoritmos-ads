//Determine a idade de uma pessoa, em anos, meses e dias, dadas a data (dia, mês e ano) do seu nascimento e a data (dia, mês e ano) atual

import {input} from "./io_utils.js";

function main(){

    //Entradas
    const nascimento = input('Digite a sua data de nascimento (dd/mm/aaaa): ')
    const hoje = input('Digite a data atual (dd/mm/aaaa): ')

    //Processamento

    console.log(idade(nascimento, hoje))

} 
function idade(nascimento, hoje){
    const [dia_n, mes_n, ano_n] = nascimento.split('/').map(Number)
    const [dia_h, mes_h, ano_h] = hoje.split('/').map(Number)
    let ano, mes, dia

    ano = ano_h - ano_n
    mes = mes_h - mes_n
    dia = dia_h - dia_n

    if(dia < 0 && mes > 0){
        //n: 15/05/2000 a: 10/09/2022 22 anos, 3 meses e 25 dias.
        dia += 30
        mes -= 1
    } else if (dia < 0 && mes < 0) {
        //n:15/05/2000 a: 10/02/2022 21 anos, 8 meses e 23 dias.
        //deu errado
        ano -= 1 
        dia += 30
        mes += 11
    } else if (dia > 0 && mes < 0){
        //n: 15/05/2000 a:21/03/2022   21 anos 10 meses e 6 dias
        ano -= 1 
        mes += 12
    } 

    return ano + " ano(s) " + mes + " mes(es) " + "e " + dia + " dia(s) " 
}


main()
