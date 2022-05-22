import prompt from 'prompt-sync'
const input = prompt()

function main(){

    let X = Number(input('Digite o valor de X: '))
    let N = Number(input('Digite o valor de N: '))
    let divisao

    while(N !== 2){
        divisao = X/N
        console.log(`\t${X}/${N} = ${divisao.toFixed(2)}`)
        X = divisao
        N--
    }
} main()