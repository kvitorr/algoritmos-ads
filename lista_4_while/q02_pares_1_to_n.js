import prompt from 'prompt-sync'
const input = prompt()



function main(){

    const N = Number(input('N: '))
    let contador = 1
    let result = ""

    while(contador <= N){
        if(ehPar(contador)) result += contador.toString() + " "
        contador++
    }

    console.log(result)
} 

const ehPar = (n1) => {return (n1 % 2) === 0} 

main()