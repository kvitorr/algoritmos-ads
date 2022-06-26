import prompt from 'prompt-sync'
const input = prompt()

function main(){

    let calorias_consumidas_diariamente
    let calorias_diarias
    let peso_ganhar
    let peso_perder

    console.log()
    const peso = Number(input('Peso: '))
    const altura = Number(input('Altura: '))

    const imc = get_imc(peso, altura)

    if(imc > 24.9){
        peso_perder = get_peso(peso, altura, 24.9)
        console.log(`IMC: ${imc.toFixed(2)}. É necessário ganhar ${peso_perder.toFixed(2)} kg`)

        calorias_consumidas_diariamente = Number(input('Calorias consumidas diariamente: '))

        calorias_diarias = get_calorias(peso_perder, calorias_consumidas_diariamente)

        console.log(`\nPara normalizar seu IMC é necessário que você siga o planejamento a seguir: `)
        console.log('\tQuantidade de calorias que devem ser perdidas de acordo com o dia da semana: ')
        console.log(`\tDia de semana: ${calorias_diarias.toFixed(2)}`)
        console.log(`\tSábado: ${(calorias_diarias/2).toFixed(2)}`)
        console.log(`\tDomingo: Não é necessário perder calorias extras`)

    } else if (imc < 19.8){
        peso_ganhar = get_peso(peso, altura, 19.8)
        console.log(`IMC: ${imc.toFixed(2)}. É necessário ganhar ${peso_ganhar.toFixed(2)}`)
        
        calorias_consumidas_diariamente = Number(input('Calorias consumidas diariamente: '))

        calorias_diarias = ((peso_ganhar/90) * 7000)

        console.log(`\tQuantidade de calorias que devem ser consumidas por dia além do normal: ${calorias_diarias.toFixed(2)}`)

    } else {
        console.log('Você está no peso ideal')
    }

} 

function get_imc(peso, altura){
    return peso/(altura*altura)
}

function get_peso(peso1, altura, imc){

    const peso2 = imc * altura * altura
    const variacao_peso = Math.abs(peso1 - peso2)

    return variacao_peso
}

function get_calorias(peso){

    const calorias_consumidas_totais = peso * 7000 //período de 90 dias

    const calorias_por_dia = calorias_consumidas_totais / 69

    return calorias_por_dia
}

main()