import prompt from 'prompt-sync'
const input = prompt()

function main(){


    const [numero1, numero2] = input('Digite dois números, separados por espaço: ').split(' ').map(Number)

    const [menor, maior] = ordemCrescente(numero1, numero2)

    let mdc = maior

    while(!ehDivisor(numero1, mdc) || !ehDivisor(numero2, mdc)){
        mdc--
    }

    console.log(`O MDC de [${numero1}, ${numero2}] é ${mdc}`)

} 

function ehDivisor(numero, mdc){
    if(numero === 0){
        return true
    }
    
    if(numero % mdc === 0){
        return true
    } else {
        return false
    }
}

function ordemCrescente(n1, n2){
    if(n1 > n2){
        return [n2, n1]
    } else {
        return [n1, n2]
    }
}

main()