import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const numero = Number(input('Número: '))
    let contador = 1
    let fatorial = 1
    let result = ""

    while(contador <= numero){
        fatorial *= contador

        if(contador < numero) result += contador.toString() + " x "
        if(contador === numero) result += contador.toString()
        
        contador++
    }

    console.log(`${numero}! = ${result} = ${fatorial}`)

} main()