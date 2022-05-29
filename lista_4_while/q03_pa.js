import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const termoInicial = Number(input('A0: '))
    const limite = Number(input('Limite: '))
    const razaoPA = Number(input('Razão PA: '))

    let termo = termoInicial
    let result = ""

    while(termo < limite){
        result += termo.toString() + " "
        termo += razaoPA
    }
    console.log(result)

} main()