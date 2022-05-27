import prompt from 'prompt-sync'
const input = prompt()


function main(){

    let idade = 0
    let opinion = 0

    let totalIdadeOtimo = 0
    let contOtimo= 0
    let contRegular = 0
    let contBom = 0
    let contParticipantes = 0


    while (idade !== -1){


        console.log('\n Novo participante: ')
        idade = Number(input('Digite sua idade: '))

        if(idade === -1){
            break
        }

        opinion = Number(input('Digite sua opinião: (1=ótimo, 2=bom, 3=regular, 4= péssimo)'))

        if(opinion === 1){
            totalIdadeOtimo += idade
            contOtimo++
        } else if (opinion === 3){
            contRegular++
        } else if (opinion === 2){
            contBom++
        }

        contParticipantes++
    }


    const mediaIdadeOtimo = (totalIdadeOtimo/contOtimo).toFixed(2)
    const percentualBom = (contBom/contParticipantes)*100


    console.log('Resumo da pesquisa: ')
    console.log(`\t Média das idades das pessoas que responderam ótimo: ${mediaIdadeOtimo}`)
    console.log(`\t A quantidade de pessoas que respondeu regular: ${contRegular}`)
    console.log(`\t O percentual de pessoas que respondeu bom entre os entrevistados: ${percentualBom}%`)


} main()