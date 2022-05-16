import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const rendaMensal = Number(input('Informe sua renda mensal: '))
    const valorEmprestimo = Number(input('Informe quanto de empréstimo você quer: '))
    const qtdparcelamento = Number(input('Informe a quantidade de parcelamentos que você deseja: '))

    const valorMaximoParcela = 0.4 * rendaMensal

    if(valorEmprestimo < 1212){
        console.log('No RSBank, o valor máximo para Empréstimo é de R$ 1.212,00.')
    } else if (qtdparcelamento < 2 || qtdparcelamento > 24){
        console.log('A quantidade de parcelas mínima são 2 e a máxima 24, tente novamente')
    } else {

        const impostoIOF = (valorEmprestimo *  (0.0038 + 0.0000082*qtdparcelamento*30)) 

        const emprestimoComIof = valorEmprestimo + impostoIOF
    
        const taxaSELIC = 0.1275
    
        const parcela18x = 0.5 * taxaSELIC
        const parcela12x = 0.75 * taxaSELIC
        const parcela7x = taxaSELIC
        const parcela2x = 1.3 * taxaSELIC

        let jurosSelic = 0

        if(qtdparcelamento > 18){
            jurosSelic = parcela18x * emprestimoComIof
        } else if (qtdparcelamento > 12){
            jurosSelic = parcela12x * emprestimoComIof
        } else if (qtdparcelamento > 7){
            jurosSelic = parcela7x * emprestimoComIof
        } else if (qtdparcelamento > 2){
            jurosSelic = parcela2x * emprestimoComIof
        }


        const juros = impostoIOF + jurosSelic

        const valorTotal = emprestimoComIof + jurosSelic

        const valorParcela = valorTotal / qtdparcelamento

        
        const valorParcelaMensal = qtdparcelamento + "x de R$ " + valorParcela.toFixed(2)


    
        console.log(`\nValor do IOF: ${impostoIOF.toFixed(2)}`)
        console.log(`Valor dos Juros a Pagar: ${juros.toFixed(2)}`)
        console.log(`Valor Total a pagar: ${valorTotal.toFixed(2)}`)
        console.log(`Valor da Parcela Mensal: ${valorParcelaMensal}\n`)

        if(valorParcela > valorMaximoParcela){
        console.log('Status: NEGADO')
        } else {
            console.log('Status: APROVADO')
        }

    } 
} main()