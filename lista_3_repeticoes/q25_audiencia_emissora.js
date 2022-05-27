import prompt from 'prompt-sync'
const input = prompt()


function main(){

    let canal = 1
    let qtdPessoas = 0

    let totalParticipantes = 0
    let cont2 = 0
    let cont4 = 0
    let cont5 = 0
    let cont7 = 0
    let cont10 = 0

    menu()


    while(canal !== 0){
        canal = Number(input('Digite o número do canal: '))

        if(canal === 0){
            break
        } 

        qtdPessoas = Number(input('Quantidade de pessoas assistindo: '))

        if(canal === 2){
            cont2++
        } else if (canal === 4){
            cont4++
        } else if (canal === 5){
            cont5++
        } else if (canal === 7){
            cont7++
        } else if (canal === 10){
            cont10++
        }


        totalParticipantes += qtdPessoas
    }


    console.log('\nResumo - Audiência')
    console.log(`Audiência total: ${totalParticipantes} pessoas (100%)`)

    console.log(`\tCanal 2: ${porcentagem(cont2, totalParticipantes).toFixed(2)}%`)
    console.log(`\tCanal 4: ${porcentagem(cont4, totalParticipantes).toFixed(2)}%`)
    console.log(`\tCanal 5: ${porcentagem(cont5, totalParticipantes).toFixed(2)}%`)
    console.log(`\tCanal 7: ${porcentagem(cont7, totalParticipantes).toFixed(2)}%`)
    console.log(`\tCanal 10: ${porcentagem(cont10, totalParticipantes).toFixed(2)}%`)

} 

function menu(){
    let menu = '----- Canais ----- '
    menu += '2, 4, 5, 7, 10\n'
    
    console.log(menu)
}

const porcentagem = (n1, total) => {return (n1/total)*100}




main()