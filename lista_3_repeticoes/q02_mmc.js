import prompt from 'prompt-sync'
const input = prompt()

function main(){

    let mmc = 1

    const [numero1, numero2] = input('Digite dois números, separados por espaço: ').split(' ').map(Number)

    while(!ehMultiplo(numero1, mmc) || !ehMultiplo(numero2, mmc)){
        mmc++
    }

    console.log(`O MMC de [${numero1}, ${numero2}] é ${mmc}`)

} 

function ehMultiplo(numero, mmc){

    if(mmc % numero === 0){
        return true
    } else {
        return false
    }



}



main()