import prompt from 'prompt-sync'
const input = prompt()


function main(){

    let top = 1
    let bottom = 1
    let soma = 0

    while(top <= 99){

        soma += top/bottom

        top += 2
        bottom++
    }

    console.log(`Soma = ${soma.toFixed(2)}`)

} 

main()