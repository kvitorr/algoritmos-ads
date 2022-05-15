import fs from 'fs'
const lines = fs.readFileSync('./input.txt', 'utf-8').split('\n')

function main(){

    //Entradas e variáveis
    const [horaInicial, minutoInicial, horaFinal, minutoFinal] = lines[3].split(' ').map(Number)
    let horas 
    let minutos


    if(horaFinal > horaInicial){
        horas = horaFinal - horaInicial

        if(minutoFinal === minutoInicial){
            minuto = 0
        } else if (minutoFinal > minutoInicial){
            minutos = minutoFinal - minutoInicial
        } else if (minutoFinal < minutoInicial){
            minutos = minutoFinal + (60 - minutoInicial)
            horas -= 1
        }


    } else if (horaFinal < horaInicial){
        horas = horaFinal + (24 - horaInicial)

        if(minutoFinal === minutoInicial){
            minuto = 0
        } else if (minutoFinal > minutoInicial){
            minutos = minutoFinal - minutoInicial
        } else if (minutoFinal < minutoInicial){
            minutos = minutoFinal + (60 - minutoInicial)
            horas -= 1
        }

    } else if(horaFinal === horaInicial){
        if(minutoFinal === minutoInicial){
            horas = 24
            minutos = 0
        } else if(minutoFinal > minutoInicial) {
            horas = 0
            minutos = minutoFinal - minutoInicial
        } else if(minutoFinal < minutoInicial){
            horas = 23 
            minutos = minutoFinal + (60 - minutoInicial)
        }
    }

    if((horas <= 24 && horas >= 0) || (minutos >= 1 && minutos <= 59)){
        console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`)
    }
} main()