import prompt from 'prompt-sync'
const input = prompt()

function main(){

const carne = input('Digite a carne que você quer: File || Alcatra ||Picanha: ')

const kg = Number(input('Digite a quantidade de kg\'s: '))

const cartao = input('Possui cartão tabajara? sim || nao: ')

let preco = 0
let valorTotal = 0
let desconto = 0


    if(carne === "File"){
        if(kg > 5){
            preco = 5.8
        } else {
            preco = 4.9
        }
    } else if (carne === "Picanha"){
        if(kg > 5){
            preco = 7.8
        } else {
            preco = 6.9
        }
    } else if (carne === "Alcatra"){
        if(kg > 5){
            preco = 6.8
        } else {
            preco = 5.9
        }
    }

    if(cartao === "sim"){
        valorTotal = kg * preco * 0.95
        desconto = kg * preco * 0.05
    } else {
        valorTotal = kg * preco
    }

    console.log(`\tTipo: ${carne}`)
    console.log(`\tQuantidade de carne: ${kg} kg's`)
    console.log(`\tPreço total: R$ ${(valorTotal + desconto).toFixed(2)}`)
    console.log(`\tCartão Tabajara? ${cartao}`)
    console.log(`\tValor do desconto: R$ ${desconto.toFixed(2)}`)
    console.log(`\tValor a pagar: R$ ${valorTotal.toFixed(2)}`)
    

} main()