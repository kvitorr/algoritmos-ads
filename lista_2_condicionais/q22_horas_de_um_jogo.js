//Leia a hora do início de um jogo e a hora de fim do jogo (cada hora é composta por 2 variáveis inteiras: hora e minuto). 

//Calcule e escreva a duração do jogo (horas e minutos), sabendo-se que o tempo máximo de duração do jogo é de 24 horas e que ele pode iniciar-se em um dia e terminar no dia seguinte

import {input} from './io_utils.js'

function main(){

    const hora_de_inicio = input('Digite a hora de inicio do jogo (ex.: 12:55): ')
    const [hora_inicio, minuto_inicio] = hora_de_inicio.split(":").map(Number)

    const hora_de_termino = input('Digite a hora de término do jogo (ex.: 12:55): ')
    const [hora_termino, minuto_termino] = hora_de_termino.split(":").map(Number)

    let resultado

        if(hora_inicio === hora_termino && minuto_inicio === minuto_termino) {
            console.log('O jogo durou 24 horas')
        } else if (hora_inicio === hora_termino){  
            //Inicio: 15:55  Final: 15:59 resultado: 4 minutos
            //Inicio: 15:55  Final: 15:50 resultado: 23 horas e 55 minutos
            resultado = duracao_da_partida_mesmo_dia(hora_inicio, hora_termino, minuto_inicio, minuto_termino)

            console.log(`\tO jogo durou ${resultado}`)
            
        } else if (mesmo_dia(hora_inicio, hora_termino)){
            //Inicio: 15:30  Final: 16:32 resultado: 1 hora e 2 minutos
            //Inicio: 15:30 Final: 16:29 resultado: 59 minutos
            resultado = duracao_da_partida_mesmo_dia(hora_inicio, hora_termino, minuto_inicio, minuto_termino)

            console.log(`\tO jogo durou ${resultado}`)

        } else {
            //Inicio: 15:55  Final: 14:59 resultado: 23:04 MF > MI
            //Inicio: 15:55  Final: 14:45 resultado: 22:50 MF < MI
            resultado = duracao_da_partida_outro_dia(hora_inicio, hora_termino, minuto_inicio, minuto_termino)

            console.log(`\tO jogo durou ${resultado}`)
        } 

    }


//Funções
const mesmo_dia = (hora_i, hora_f) => {return (hora_f > hora_i)} //true: não virou outro dia. false: outro dia. 


function duracao_da_partida_mesmo_dia(hora_de_i, hora_de_t, minuto_i, minuto_t){
    
    let horas_resultado = hora_de_t - hora_de_i
    let minutos_resultado = minuto_t - minuto_i

    if ((minutos_resultado < 0) && (hora_de_i === hora_de_t)){ //quando o minuto do termino é menor que o minuto do inicio
        horas_resultado = 23
        minutos_resultado = 60 + minutos_resultado

    } else if (minutos_resultado < 0){ //quando o minuto do termino é menor que o minuto do inicio
        horas_resultado = horas_resultado - 1
        minutos_resultado = 60 + minutos_resultado
    }

    horas_resultado = String(horas_resultado)
    minutos_resultado = String(minutos_resultado)

    return (horas_resultado+ " hora(s) " + minutos_resultado + " minuto(s)")
}

function duracao_da_partida_outro_dia(hora_de_i, hora_de_t, minuto_i, minuto_t){

    let horas_resultado = (24 - hora_de_i) + hora_de_t
    let minutos_resultado = minuto_t - minuto_i
    
    if(minutos_resultado < 0){ //quando o minuto do termino é menor que o minuto do inicio
        horas_resultado = horas_resultado - 1
        minutos_resultado = 60 + minutos_resultado
    }

    return (horas_resultado+ " hora(s) " + minutos_resultado + " minuto(s)")
}

main()