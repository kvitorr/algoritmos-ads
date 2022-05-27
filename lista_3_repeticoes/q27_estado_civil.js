import prompt from 'prompt-sync'
const input = prompt()



function main(){

    let cont = 0
    let sexo
    let idade
    let estadoCivil 

    let contMulheres = 0
    let contHomens = 0

    let totalIdadeHomens = 0
    let totalIdadeMulheres = 0

    let contSolteiros = 0
    let contSolteiras = 0

    let contDivorcedAbove30 = 0

    while(cont < 1){
        console.log('Novo participante: ')
        sexo = Number(input('Sexo: '))
        idade = Number(input('Idade: '))
        estadoCivil = Number(input('Estado civil: '))


        if(sexo === 1){
            contHomens++
            totalIdadeHomens += idade

            if(estadoCivil === 2){
                contSolteiros++
            }

        } else if (sexo === 2){
            contMulheres++
            totalIdadeMulheres += idade

            if(estadoCivil === 2){
                contSolteiras++
            } else if (estadoCivil === 3 && idade > 30){
                contDivorcedAbove30++
            }
        }

        cont++
    }

    const mediaIdadeHomens = (totalIdadeHomens/contHomens).toFixed(2)
    const mediaIdadeMulheres = (totalIdadeMulheres/contMulheres).toFixed(2)
    const percentualSolteiros = ((contSolteiros/contHomens)*100).toFixed(2)
    const percentualSolteiras = ((contSolteiras/contMulheres)*100).toFixed(2)


    console.log('Resumo:')

    console.log(`\t Media da idade dos Homens: ${mediaIdadeHomens} anos`)
    console.log(`\t Media da idade das Mulheres: ${mediaIdadeMulheres} anos`)
    console.log(`\t Percentual de Homens solteiros: ${percentualSolteiros}%`)
    console.log(`\t Percentual de Mulheres solteiras: ${percentualSolteiras}%`)
    console.log(`\t Mulheres divorciadas acima de 30 anos: ${contDivorcedAbove30}`)
    

} main()