import prompt from 'prompt-sync'
const input = prompt()

function main(){

    let contador1 = 1
    let contador2 = 1

    while(contador1 <= 10){
        
        console.log(`\n------- Tabuada do número ${contador1} ------- `)
        
        while(contador2 <= 10){

            console.log(`${contador1} x ${contador2} = ${contador1 * contador2}`)

            contador2++
        }
        contador2 = 1
        contador1++
    }


} main()