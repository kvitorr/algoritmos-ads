import prompt from 'prompt-sync'
const input = prompt()


function main(){

    const n = Number(input('N: '))
    let resultado = ""

    for(let i = 1; i <= n; i +=1){
        if(eh_par(i)){
            resultado += String(i) + " "
        }
    }

    console.log(resultado)

} 

const eh_par = (number) => {return (number % 2) === 0}

main()