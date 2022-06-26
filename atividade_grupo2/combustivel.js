import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const valor_inicial_gasolina = Number(input('Digite o valor inicial do litro da Gasolina: '))

    let valor_petrobras = valor_inicial_gasolina * 0.36 
    let valor_icms = valor_inicial_gasolina * 0.27
    let etanol_anidro = valor_inicial_gasolina * 0.13
    let outros_impostos = valor_inicial_gasolina * 0.1
    let distribuicao = valor_inicial_gasolina * 0.14

    console.log(`\tComposição do valor: R$    ${valor_inicial_gasolina.toFixed(2)}`)
    console.log(`\tPetrobrás:                 ${valor_petrobras.toFixed(2)}`)
    console.log(`\tICMS:                      ${valor_icms.toFixed(2)}`)
    console.log(`\tEtanol Anidro:             ${etanol_anidro.toFixed(2)}`)
    console.log(`\tCide, PIS/Pasep e Confins: ${outros_impostos.toFixed(2)}`)
    console.log(`\tPetrobrás:                 ${distribuicao.toFixed(2)}`)
    

    const porcentagem_reajuste_gasolina = Number(input('Digite o valor do reajuste da gasolina em % (ex: 10% seria digitado apenas como 10): '))

    const valor_parte_gasolina = valor_inicial_gasolina * 0.73
    const valor_parte_alcool = valor_inicial_gasolina * 0.27

    const valor_reajustado_gasolina = valor_parte_gasolina * (1+ (porcentagem_reajuste_gasolina/100))

    const valor_reajustado = valor_parte_alcool + valor_reajustado_gasolina

    valor_petrobras = valor_reajustado * 0.36 
    valor_icms = valor_reajustado * 0.27
    etanol_anidro = valor_reajustado * 0.13
    outros_impostos = valor_reajustado * 0.1
    distribuicao = valor_reajustado * 0.14

    console.log(`\tValor Reajustado: R$       ${valor_reajustado.toFixed(2)}`)
    console.log(`\tPetrobrás:                 ${valor_petrobras.toFixed(2)}`)
    console.log(`\tICMS:                      ${valor_icms.toFixed(2)}`)
    console.log(`\tEtanol Anidro:             ${etanol_anidro.toFixed(2)}`)
    console.log(`\tCide, PIS/Pasep e Confins: ${outros_impostos.toFixed(2)}`)
    console.log(`\tPetrobrás:                 ${distribuicao.toFixed(2)}`)


} main()