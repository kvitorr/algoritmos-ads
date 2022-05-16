import prompt from 'prompt-sync'
const input = prompt()


function main(){
    
    const rendimentoAlcool = Number(input('Digite o rendimento do veículo com Álcool (km/L): '))
    const rendimentoGasolina = Number(input('Digite o rendimento do veículo com Gasolina (km/L): '))

    const distancia = Number(input('Digite a distância a ser percorrida, em km: '))

    const litroGasolina = Number(input('Digite o valor do litro da gasolina: '))
    const litroAlcool = Number(input('Digite o valor do litro do Álcool: '))


    const qtdGasolina =  distancia/rendimentoGasolina
    const qtdAlcool =  distancia/rendimentoAlcool

    const valorGasolina = qtdGasolina * litroGasolina
    const valorAlcool = qtdAlcool * litroAlcool


    console.log(`O valor gasto de gasolina será: R$ ${valorGasolina.toFixed(2)}`)
    console.log(`O valor gasto de alcool será: R$ ${valorAlcool.toFixed(2)}`)


} main()