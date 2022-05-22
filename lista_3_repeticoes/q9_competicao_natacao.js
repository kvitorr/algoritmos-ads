import prompt from 'prompt-sync'
const input = prompt()

function main(){

    console.log("\n")
    let numeroProva = Number(input('Digite o número da prova: '))
    let qtdNadadores = Number(input('Digite a quantidade de nadadores:  '))

    let nome
    let classificacao
    let tempo
    let clube 


    let contadorNadadores = 0
    let pontosClubeA = 0
    let pontosClubeB = 0

    while(numeroProva !== 0 && qtdNadadores !== 0){
        

        while(qtdNadadores > contadorNadadores){

            nome = input(`Digite o nome do ${contadorNadadores+1} nadador: `)
            classificacao = Number(input(`\tDigite a sua classificação na ${numeroProva} prova: `))
            tempo = input('Digite seu tempo de prova: ')
            clube = input('\t\tDigite seu clube "a" ou "b": ')

            if(clube === "a"){
                pontosClubeA += pontosColocacao(classificacao)
            } else if (clube === "b"){
                pontosClubeB += pontosColocacao(classificacao)
            }
            contadorNadadores++
        }

        console.log("\n------------ Nova Prova ------------")
        console.log("Para encerrar digite 0 e confirme duas vezes.\n")
        numeroProva = Number(input('Digite o número da prova: '))
        qtdNadadores = Number(input('Digite a quantidade de nadadores:  '))
    }


    if(pontosClubeA > pontosClubeB){

        console.log(`\n\tPontuação total clube B: ${pontosClubeB}`)
        console.log(`\tPontuação total clube A: ${pontosClubeA}`)
        console.log(`\nO vencedor foi o clube A`)


    } else if (pontosClubeB > pontosClubeA){

        console.log(`\n\tPontuação total clube A: ${pontosClubeA}`)
        console.log(`\tPontuação total clube B: ${pontosClubeB}`)
        console.log(`\nO vencedor foi o clube B`)

    } else {
        console.log('DADOS INVÁLIDOS, TENTE NOVAMENTE.')
    }
} 

function pontosColocacao(posicao){

    let pontos = 0

    if(posicao === 1){
        pontos = 9
    } else if (posicao === 2){
        pontos = 6
    } else if (posicao === 3){
        pontos = 4
    } else if (posicao === 4){
        pontos = 3
    }
    return pontos 
}

main()