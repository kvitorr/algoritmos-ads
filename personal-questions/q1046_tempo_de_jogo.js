import fs from 'fs'
const lines = fs.readFileSync('./input.txt', 'utf-8').split('\r\n')


function main(){

    //Entradas
    const [horaInicial, horaFinal] = lines[2].split(' ').map(Number)
    let horas

    //Processamento
    if(horaFinal === horaInicial){
        console.log('O JOGO DUROU 24 HORA(S)')
    } else if(horaFinal > horaInicial){
        horas = horaFinal - horaInicial
        console.log(`O JOGO DUROU ${horas} HORA(S)`)
    } else if (horaFinal < horaInicial){
        horas = horaFinal + (24 - horaInicial)
        console.log(`O JOGO DUROU ${horas} HORA(S)`)
    }
} 
main()