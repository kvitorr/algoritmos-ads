//Leia uma data (dia, mes e ano), verifique e escreva se a data é ou não válida

import { input } from "./io_utils.js";


function main(){

    //Entradas
    let [dia, mes, ano] = input("Digite uma data, no formato dd/mm/aaaa para ser avaliada ").split("/")

    //Selecionando a dezena e a unidade do ano para a verificação do ano bissexto
    const dezena = ano[ano.length - 2] //ano.length pra caso o ano não tenha 4 digitos
    const unidade = ano[ano.length - 1]

    //Transformando para Number pra não atrapalhar as futuras verificações
    dia = Number(dia)
    mes = Number(mes)
    ano = Number(ano)



    //Verificações

    //Verifica se o mes está correto, se está entre os 12 existentes. VALIDO? recebe valor 1
    let verifica_numero_mes_var = verifica_numero_mes(mes)

    //Verifica se o ano está correto, não exitem anos negativos
    let verifica_numero_ano_var = verifica_numero_ano(ano)


    //Verifica se o ano é bissexto. VALIDO? recebe valor 1
    let verifica_ano_bissexto = Number(dezena + unidade)
    const verifica_ano_bissexto_var = ano_bissexto(ano, verifica_ano_bissexto)


    //Verifica se o dia escolhido é valido no mes digitado. VALIDO? recebe valor 1    
    let verifica_dia_mes_var = verifica_dia_mes(dia, mes, verifica_ano_bissexto_var)


    //Processamento
    
    if((verifica_dia_mes_var === 1) && verifica_numero_ano_var === 1 && (verifica_numero_mes_var === 1)) {
        //Saídas
        console.log("\nA data digitada é válida\n")

    } else {
        //Saídas
        console.log("\nA data digitada é inválida\n")
    }
} 

function ano_bissexto(ano, n1){
    if(n1 === 0){

        if(ano % 400 === 0){
         return 1 //É ano bissexto

        } else {
            return 0 //Não é ano bissexto ex.: ano 500
        }

    } else if (ano % 4 === 0){
        return 1 //É ano bissexto

    } else {
        return 0 //Não é ano bissexto
    }
}

function verifica_numero_ano (ano){
    if(ano<0){
        return 0
    } else {
        return 1
    }
} 

//MODIFICAÇÃO
function verifica_numero_mes (mes){
    if(mes <= 0 || mes > 12 ){
        return 0 //mes inválido

    } else {
        return 1 //mes válido
    }
}

function verifica_dia_mes(dias, mes, ano_bissexto){
    if((mes === 4 ) || (mes === 6) || (mes === 9) || (mes === 11) ){ //Faz a verificação dos meses que possuem 30 dias
        if(dias >= 1 && dias <= 30){
            console.log(" a1")
            return 1 //dia válido

        } else {
            console.log(" b2 ")
            return 0 //dia inválido
        }
    } else if ((mes === 1) || (mes === 3) || (mes === 5) || (mes === 7) || (mes === 8) || (mes === 10) || (mes === 12)){
        if(dias >= 1 && dias <= 31){ //Faz a verificação dos meses que possuem 31 dias
            return 1 //dia válido

        } else {
            return 0 //dia inválido
        }
    } else if (ano_bissexto === 0 && mes === 2){ //Faz a verificação de Fevereiro em ano que não é bissexto
        if(dias <= 28 && dias >= 1){
            return 1 //fevereiro sem ano bissexto com dia válido

        } else {
            return 0 //fevereiro sem ano bissexto com dia inválido
        }
    } else {
        //ano bissexto, fevereiro 29 dias
        if (dias <= 29 && dias >= 1){
            return 1 //fevereiro com ano bissexto, dia correto

        } else {
            return 0 // fevereiro em ano bissexto porém com data errada (acima do dia 31 e menor que o dia 1)
        }
    }
}

main()