import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const N = Number(input('N: '))
    let contador = 0
    let quadrado = 1
    let result = 0

    while(contador <= N){

        quadrado = (contador * contador)

        if(quadrado <= N) result = quadrado
        else if (quadrado > N) break

        contador++
    }

    console.log(`O maior quadrado menor ou igual a N é ${result}`)

} main()