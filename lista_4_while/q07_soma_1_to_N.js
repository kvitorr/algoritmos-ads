import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const N = Number(input('N: '))
    let contador = 2
    let soma = 0
    let numbers = ""

    while(contador < N){
        
        if(contador === N-1) numbers += `${contador}`
        else if(contador < N) numbers += `${contador} + `

        soma += contador
        
      contador++
    }

    console.log(`[${1}, ${N}] = ${numbers} = ${soma}`)


} main()