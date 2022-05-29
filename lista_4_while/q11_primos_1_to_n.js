import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const limiteInferior = Number(input('Limite Inferior: '))
    const limiteSuperior = Number(input('Limite superior: '))

    let result = ''
    let contador = limiteInferior

    while(contador < limiteSuperior){
        
        if(numero_primo(contador)) result += contador.toString() + " "

        contador++
    }

    console.log(`Primos entre (${limiteInferior}, ${limiteSuperior}) : ${result}`)

} 

function numero_primo(n1){

    if(n1 === 1) {
        return false

    } else if (n1 === 2 || n1 === 3 || n1 === 5 || n1 === 7) {
        return true

    } else if ( ((n1 % 2) !== 0) && ((n1 % 3) !== 0) && ((n1 % 5) !== 0) && (((n1 % 7) !== 0)) ){
        return true

    } else {
        return false
    }
}

main()