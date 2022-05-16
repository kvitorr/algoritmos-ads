import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const valorDollar = Number(input('Digite a cotação atual do dóllar: '))

    const qtd_de_dollares = Number(input('Quantos dóllares você quer comprar? '))

    const valor_em_reais = qtd_de_dollares * 1.011 * valorDollar

    console.log(`Valor a ser pago: R$ ${valor_em_reais.toFixed(3)}`)
} main()