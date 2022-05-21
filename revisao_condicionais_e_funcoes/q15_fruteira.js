import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const kgDeMorangos = Number(input('Quantos kg de morango foram comprados? '))

    const kgDeMacas = Number(input('Quantos kg de maçãs foram comprados? '))

    const kgDeFrutas = kgDeMorangos + kgDeMacas

    let precoMaca = 0
    let precoMorango = 0
    
    if(kgDeMorangos > 5){
        precoMorango = 2.2
    } else {
        precoMorango = 2.5
    }

    if(kgDeMacas > 5){
        precoMaca = 1.5
    } else {
        precoMaca = 1.8
    }

    const precoTotal = (precoMorango * kgDeMorangos) + (precoMaca * kgDeMacas)

    if(kgDeFrutas > 8 || precoTotal > 25){
        console.log(`Valor a ser pago: ${(precoTotal * 0.9).toFixed(2)}`)
    } else {
        console.log(`Valor a ser pago: ${precoTotal.toFixed(2)}`)
    }

    





} main()