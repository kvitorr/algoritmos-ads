import prompt from 'prompt-sync'
const input = prompt()


function main(){

    let precoGasolina = 2.5
    let precoAlcool = 1.9

    const qtdLitros = Number(input('Digite a quantidade de litros vendidos: '))

    const tipoDeCombustivel = input('A - Álcool || ou || G - gasolina: ')

    let valorAPagar = 0

    if(tipoDeCombustivel === "A"){

        if(qtdLitros > 20){
            precoAlcool *= 0.95
        } else {
            precoAlcool *= 0.97
        }

        valorAPagar = precoAlcool * qtdLitros
        console.log(`\tValor a pagar: ${valorAPagar.toFixed(3)}`)

    } else if (tipoDeCombustivel === "G"){

        if(qtdLitros > 20){
            precoGasolina *= 0.94
        } else {
            precoGasolina *= 0.96
        }
        valorAPagar = precoGasolina * qtdLitros
        console.log(`\tValor a pagar: ${valorAPagar.toFixed(3)}`)
    } 








} main()