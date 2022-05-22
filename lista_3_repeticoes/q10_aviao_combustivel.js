import prompt from 'prompt-sync'
const input = prompt()

function main(){


    const qtdContainers = Number(input('Digite a quantidade de containeres: '))
    const pesoContainers = Number(input('Digite a quantidade de peso de cada container: '))

    let numeroBilhete = Number(input('Digite o número do bilhete: '))
    let qtdDeBagagens = 0
    let qtdPassageiros = 0
    
    qtdDeBagagens += Number(input('Digite a quantidade de bagagens: '))

    while(numeroBilhete !== 0){
        qtdPassageiros++
        
        console.log('\n\tCadastrar novo passageiro: ')
        numeroBilhete = Number(input('Digite o número do bilhete: '))

        if(numeroBilhete !== 0){
            qtdDeBagagens += Number(input('Digite a quantidade de bagagens: '))
        }
    }

    const qtdTotalVolumeBagagem = qtdDeBagagens * 10
    const pesoPassageiros = 70*qtdPassageiros
    const pesoCarga = qtdContainers * pesoContainers

    //pesoDecolagem = pesoCombustivel + pesoCarga + pesoPassageiros
    //pesoCombustivel = pesoDecolagem - pesoCarga - pesoPassageiros
    const pesoCombustivel = 500000 - pesoCarga - pesoPassageiros

    //pesoCombustivel = combustivelLitros * 1.5kg/L
    //combustivelLitros = pesoCombustivel/1.5

    const combustivelLitros = pesoCombustivel/1.5

    //Saídas
    console.log('\n\t--------- Resumo')
    console.log(`Quantidade de passageiros: ${qtdPassageiros}`)
    console.log(`Quantidade total de volume de bagagem: ${qtdTotalVolumeBagagem.toFixed(2)} kg(s)`)
    console.log(`Peso dos passageiros: ${pesoPassageiros.toFixed(2)} kg(s)`)
    console.log(`Peso da carga: ${pesoCarga.toFixed(2)} kg(s)`)
    console.log(`Quantidade possível de combustível: ${combustivelLitros.toFixed(2)} litros`)

    if(combustivelLitros < 10.000){
        console.log('Decolagem não liberada\n')
    } else {
        console.log('Decolagem liberada\n')
    }

} main()