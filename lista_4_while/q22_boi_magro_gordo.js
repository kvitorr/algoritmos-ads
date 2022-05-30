import prompt from 'prompt-sync'
const input = prompt()


function main(){

    let numberID = Number(input('\tDigite o número de identificação do boi: '))
    let height = Number(input('\tDigite o peso do boi: '))

    let fatterID =  numberID
    let thinnerID = numberID

    let fatter = height
    let thinner = height

    while(numberID !== 0){

        if(height > fatter){
            fatterID = numberID
            fatter = height
        } else if (height < thinner){
            thinnerID = numberID
            thinner = height
        }
        console.log('\n---- Novo Boi')
        numberID = Number(input('Digite o número de identificação do boi: '))

        if(numberID === 0){
            break
        }

        height = Number(input('Digite o peso do boi: '))
    }


    console.log('\n-> Resumo\n')
    console.log('\t Boi mais gordo: ')
    console.log(`Número de identificação: ${fatterID}`)
    console.log(`Peso: ${fatter} kg(s)\n`)

    console.log('\t Boi mais magro: ')
    console.log(`Número de identificação: ${thinnerID}`)
    console.log(`Peso: ${thinner} kg(s)\n`)


} main()