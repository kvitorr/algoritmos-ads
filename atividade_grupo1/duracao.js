import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const [horarioInicial, horarioFinal] = input('Digite o horário inicial e final, separados por espaço, (hh/mm hh/mm): ').split(' ')
    
    const [horaInicial, minutosInicial] = horarioInicial.split('/').map(Number)
    const [horaFinal, minutosFinal] = horarioFinal.split('/').map(Number)

    let horas
    let minutos


    if(horaFinal >= 24 || horaFinal < 0 || horaInicial >= 24 || horaInicial < 0 || minutosFinal >= 60 || minutosInicial >= 60 || minutosFinal < 0 || minutosInicial < 0){
        console.log('ERRO: Horário inválido... tente novamente')
    } else {
        if(minutosFinal > minutosInicial){
            horas = horaFinal - horaInicial
            minutos = minutosFinal - minutosInicial
        } else if (minutosInicial > minutosFinal){
            horas = (horaFinal - horaInicial) - 1
            minutos = (60 - minutosInicial) + minutosFinal        
        } else if (minutosInicial === minutosFinal){
            horas = horaFinal - horaInicial
            minutos = 0
        }
    
        console.log(`Uma diferença de ${horas} horas e ${minutos} minutos`)
    }

} main()