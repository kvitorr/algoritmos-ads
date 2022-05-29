import prompt from 'prompt-sync'
const input = prompt()



function main(){

    const N = Number(input('N: '))
    let contador = 1
    let result = ""

    while(contador <= N){
        result += contador.toString() + " "
        contador++
    }

    console.log(result)

} main()