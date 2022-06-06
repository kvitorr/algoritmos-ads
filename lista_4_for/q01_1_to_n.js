import prompt from 'prompt-sync'
const input = prompt()


function main(){

    const n = Number(input('N: '))
    let resultado = ""

    for(let i = 1; i <= n; i +=1){
        resultado += String(i) + " "
    }

    console.log(resultado)

} main()