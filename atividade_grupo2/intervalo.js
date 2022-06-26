import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const horario1 = input('Digite o primeiro horário dd/mm/aa hh/mm/ss')
    const horario2 = input('Digite o primeiro horário dd/mm/aa hh/mm/ss')

    const [dia1, mes1, ano1, horas1, minutos1, segundos1 ] = horario1.split(' ').join('/').split('/').map(Number)
    const [dia2, mes2, ano2, horas2, minutos2, segundos2 ] = horario2.split(' ').join('/').split('/').map(Number)

    const ms_data1 = transforma_data_para_ms(ano1, mes1, dia1, horas1, minutos1, segundos1)
    const ms_data2 = transforma_data_para_ms(ano2, mes2, dia2, horas2, minutos2, segundos2)

    const difference = Math.abs(ms_data1 - ms_data2)

    ms_to_data(difference)

} 


function transforma_data_para_ms(ano, mes, dia, hora, minuto, segundo){

    const ms = (ano * 86400 * 30 * 12) + (mes * 86400 * 30) + (dia * 86400) + (hora * 3600) + (minuto * 60) + segundo

    return ms
}

function ms_to_data(ms){
    
    let resto    
    const anos = Math.floor(ms/(86400 * 30 * 12))
    resto = ms % (86400 * 30 * 12)

    const meses = Math.floor(resto/(86400 * 30))
    resto = resto % (86400 * 30)

    const dias = Math.floor(resto/(86400))
    resto = resto % (86400)

    const horas = Math.floor(resto/(3600))
    resto = resto % (3600)

    const minutos = Math.floor(resto/(60))
    resto = resto % (60)

    const segundos = resto

    console.log(`\tIntervalo entre as duas datas: ${dias} dia(s), ${meses} mes(es), ${anos} ano(s), ${horas} hora(s), ${minutos} minuto(s), ${segundos} segundo(s)`)

}


main()