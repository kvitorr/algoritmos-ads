import prompt from 'prompt-sync'
const input = prompt()



function main(){

    const razaoPa = Number(input('Razão PA: '))
    const primeiroTermoPa = Number(input('Primeiro termo PA: '))
    const N = Number(input('Quantidade de termos: '))

    let termo = primeiroTermoPa
    let result = ""
    let contador = 0


    while(N > contador){

        result += termo.toString() + " "

        termo = razaoPa + termo

        contador++
    }

    console.log(`\t ${result}`)

} main()