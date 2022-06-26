
import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const salario = Number(input('Salario: '))
    const porcentagem_do_salario = Number(input('Investimento mensal do salário (15 = 15%): '))/100
    const taxa_de_rendimento = Number(input('Taxa de rendimento: '))/100
    const objetivo = input('Objetivo do investimento: ')
    const dinheiro_necessario = Number(input('Dinheiro necessário para cumprir seu objetivo: '))

    const tempo_necessario = get_tempo_de_investimento(salario, porcentagem_do_salario, taxa_de_rendimento, dinheiro_necessario)

    console.log(`Para completar seu objetivo de ${objetivo} [...]`)
    if(tempo_necessario <= 12){
        console.log(`Mariana demorará ${tempo_necessario} meses`)
    } else {
        const anos = Math.trunc(tempo_necessario/12)
        const meses = tempo_necessario%12
        console.log(`Mariana demorará ${anos} ano(s) e ${meses} mes(es)`)
    }

} 

function get_tempo_de_investimento(salario, porcentagem_do_salario, taxa_de_rendimento, dinheiro_necessario){

    let meses = 0
    let saldo_total = 0
    const aporte = salario * porcentagem_do_salario

    while(saldo_total < dinheiro_necessario){

        console.log(`${meses} --- Saldo: ${saldo_total}`)

        saldo_total += aporte
        saldo_total += saldo_total * taxa_de_rendimento

        meses++
    }


    return meses

}


main()
