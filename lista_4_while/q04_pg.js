import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const termoInicial = Number(input('A0: '))
    const limite = Number(input('Limite: '))
    const razaoPG = Number(input('Razão PA: '))

    let termo = termoInicial
    let contador = 0
    let result = ""

    while(termo < limite){
        result += termo.toString() + " "
        termo *= razaoPG
    }
    console.log(result)

} main()