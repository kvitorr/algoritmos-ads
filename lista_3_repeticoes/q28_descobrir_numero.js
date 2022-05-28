import prompt from 'prompt-sync'
const input = prompt()


function main(){

    const aleatorio = getRandomArbitrary(0, 10000)

    let tentativa = Number(input('Número: '))

    while(tentativa !== aleatorio){

        if(tentativa > aleatorio){
            console.log('O número é Menor')
        } else {
            console.log('O número é Maior')
        }

        tentativa = Number(input('Número: '))
    }

    console.log(`\tCongratulations :D\nVocê acertou!! o número era: ${aleatorio}`)


} 

function getRandomArbitrary(min, max){
    return Math.trunc(Math.random() * (max-min) + min)
}



main()