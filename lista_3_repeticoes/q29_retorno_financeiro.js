import prompt from 'prompt-sync'
const input = prompt()



function main(){

    const investimentoMensal = Number(input('Quanto você quer depositar por mês? '))
    const taxaJurosMensal = Number(input('Digite a porcentagem da taxa de juros mensal  ex (10%, digite 10) : '))/100
    let pergunta = "S"
    let contador = 0
    let saldoBancario = 0
    let anos = 0

    while(pergunta === "S" || pergunta === "s"){

        while(contador < 12){
            saldoBancario += saldoBancario * taxaJurosMensal + investimentoMensal

            contador++
        }

        contador = 0
        anos++
        console.log(`\tSaldo do investimento após ${anos} ano(s):\n\tR$ ${saldoBancario.toFixed(2)}`)

        pergunta = input('Deseja processar mais um ano (S/N)? ')
    }

} main()