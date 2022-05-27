import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const numero = Number(input('Digite um número: '))
    let divisao = numero/2
    console.log(`\tDivisão: ${divisao}`)

    while(divisao >= 1){
        divisao = divisao/2
        console.log(`\tDivisão: ${divisao}`)
    }
    
    console.log(`\tResultado da ultima divisão efetuada: ${divisao}`)

} main()