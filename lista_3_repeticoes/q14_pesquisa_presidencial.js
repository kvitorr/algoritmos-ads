import prompt from 'prompt-sync'
const input = prompt()


function main(){

    menu()

    let opinion = Number(input('Digite sua intenção de voto: '))

    let contSerra = 0
    let contDilma = 0
    let contCiro = 0

    let contIndecisos = 0
    let contOutros = 0
    let contBrancoNulo = 0

    let contParticipantes = 0

    while(!(opinion === -1)){

        if(opinion === 45){
            contSerra++
        } else if (opinion === 13){
            contDilma++
        } else if (opinion === 23){
            contCiro++
        } else if (opinion === 99){
            contIndecisos++
        } else if(opinion === 98){
            contOutros++
        } else if (opinion === 0){
            contBrancoNulo++
        }

        opinion = Number(input('Digite sua intenção de voto: '))
        contParticipantes++
    }

    const votosValidos = contCiro + contDilma + contSerra + contOutros

    const percentDilma = (contDilma/votosValidos )*100
    const percentSerra = (contSerra/votosValidos )*100
    const percentCiro = (contCiro/votosValidos )*100
    const percentOutros = (contOutros/votosValidos )*100
    const percentBrancoNulo = (contBrancoNulo/contParticipantes )*100
    const percentIndecisos = (contIndecisos/contParticipantes )*100

    console.log('\n-----Porcentagens:')
    console.log(`\tDilma: ${percentDilma.toFixed(2)}%`)
    console.log(`\tSerra: ${percentSerra.toFixed(2)}%`)
    console.log(`\tCiro: ${percentCiro.toFixed(2)}%`)
    console.log(`\tOutros: ${percentOutros.toFixed(2)}%`)
    console.log(`\tBranco/Nulo: ${percentBrancoNulo.toFixed(2)}%`)
    console.log(`\tIndecisos: ${percentIndecisos.toFixed(2)}%`)
    console.log(`\t${contParticipantes} participantes`)

    if(percentCiro > 50 || percentDilma > 50 || percentSerra > 50){

        console.log('Não haverá segundo turno')
    } else {
        console.log('Haverá segundo turno')
    }

} 

function menu(){
    let menu = "---------- Candidatos\n"
    menu += "\tSerra = 45\n"
    menu += "\tDilma = 13\n"
    menu += "\tCiro Gomes = 23\n"
    menu += "\tIndeciso = 99\n"
    menu += "\tOutros = 98\n"
    menu += "\tBranco/nulo = 0\n"

    console.log(menu)

}

main()