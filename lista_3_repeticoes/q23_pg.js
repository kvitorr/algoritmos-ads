import prompt from 'prompt-sync'
const input = prompt()


function main(){

    const razaoPg = Number(input('Razão PG: '))
    const primeiroTermoPg = Number(input('Primeiro termo PG: '))

    const N = Number(input('Quantidade de termos: '))

    let contador = 0
    let termo = primeiroTermoPg
    let result = ""

    while(N > contador){

        result += termo.toString() + " " 

        termo = razaoPg * termo

        contador++
    }

    console.log(`\t ${result}`)

} main()