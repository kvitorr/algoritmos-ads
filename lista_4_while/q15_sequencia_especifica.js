import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const N = Number(input('N: '))
    let contador = 1
    let result = ""
    let termos = 0


    while(contador <= N){

        termos += contador
        if(contador < N) result += termos + ", "
        if(contador === N) result += termos + ",..."

        contador++
    }

    console.log(`Sequência: (${result})`)

} main()