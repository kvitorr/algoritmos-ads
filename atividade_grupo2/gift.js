import prompt from 'prompt-sync'
const input = prompt()

import fs from 'fs'
const lines = fs.readFileSync('./vendasmensais.txt', 'utf-8').split('\r\n')

function main(){

    let nome = ""
    let gasto = 0

    let faturamento_total = 0
    let cashback_total = 0

    let cashback = 0
    let maior = 0 
    let menor = 100000000000000
    let qtdClientes = 0

    console.log()

    while(lines.length > 0){

        [nome, gasto] = lines.shift().split(' ')
        gasto = Number(gasto)      
        
        cashback = get_cashback(gasto)

        faturamento_total += gasto
        cashback_total += cashback

        if(ehMaior(cashback, maior)){
            maior = cashback
        }

        if(ehMenor(cashback, menor)){
            menor = cashback
        }

        qtdClientes++

        console.log(`Cliente = ${nome} | Compras (R$ ${gasto.toFixed(2)}) | Cashback = R$ ${cashback.toFixed(2)}`)
    }

    const percentual_investido_cashback = (cashback_total/faturamento_total) * 100
    const valor_medio_cashback = cashback_total/qtdClientes



    console.log('\n-------- RESUMO')
    console.log(`\tFaturamento Total:                   R$ ${faturamento_total.toFixed(2)}`)
    console.log(`\tCashback total:                      R$ ${cashback_total.toFixed(2)}`)
    console.log(`\tPercentual investido em Cashback        ${percentual_investido_cashback.toFixed(2)} %`)
    console.log(`\tMaior cashback:                      R$ ${maior.toFixed(2)}`)
    console.log(`\tMenor cashback:                      R$ ${menor.toFixed(2)}`)
    console.log(`\tValor médio pago em cashback:        R$ ${valor_medio_cashback.toFixed(2)}\n`)
} 

const ehMaior = (n1, n2) => {return (n1 > n2)}
const ehMenor = (n1, n2) => {return (n1 < n2)}

function get_cashback(gasto){
    if(gasto <= 250){
        return gasto * 0.05
    } else if (gasto <= 500){
        return gasto * 0.07
    } else if (gasto <= 750) {
        return gasto * 0.08
    } else if (gasto > 750){
        return ((250 * 0.05) + (250 * 0.07) + (250 * 0.08) + ((gasto - 750) * 0.25))
    }
}

main()