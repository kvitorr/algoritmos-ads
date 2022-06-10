import prompt from 'prompt-sync'
const input = prompt()


function main(){

    const qtdEleitores = Number(input('Quantidade de Eleitores: '))

    let voto = 0

    let candidato1 = 0
    let candidato2 = 0
    let candidato3 = 0
    let contNulo = 0
    let contBranco = 0

    console.log('\t1, 2, 3 = voto para os respectivos candidatos;\n\t9 = voto nulo;\n\t0 = voto em branco;')

    
    for (let index = 0; index < qtdEleitores; index++){
        
        voto = Number(input('Voto: '))

        if (voto === 1) candidato1++
        else if (voto === 2) candidato2++
        else if (voto === 3) candidato3++
        else if (voto === 9) contNulo++
        else if (voto === 0) contBranco++

    }
        
    const result = resultadoEleicao(candidato1, candidato2, candidato3, contBranco)

    console.log('Resumo ----------')
    console.log(`\tCandidato 1:   ${candidato1}`)
    console.log(`\tCandidato 2:   ${candidato2}`)
    console.log(`\tCandidato 3:   ${candidato3}`)
    console.log(`\tVotos nulo:    ${contNulo}`)
    console.log(`\tVotos brancos: ${contBranco}`)

    console.log(`\tResultado: ${result}`)

} 

const porcentagem = (parcial, total) => {return (parcial/total)*100}

function ordernar_valores_v1(v1, v2, v3){
    if (v1 > v2){
        if (v2 > v3){
            return [v1, v2, v3]
        }else if (v3 > v1){
            return [v3, v1, v2]
        }else{
            return [v1, v3, v2]
        }
    }else{ // v2 > v1
        if (v1 > v3){
            return [v2, v1, v3]
        }else if (v3 > v2){
            return [v3, v2, v1]
        }else{
            return [v2, v3, v1]
        }
    }
}

function resultadoEleicao (candidato1, candidato2, candidato3, brancos){

    const votosValidos = candidato1 + candidato2 + candidato3 + brancos
    const porcentagemBrancos = porcentagem(brancos, votosValidos)
    const porcentagemCandidato1 = porcentagem(candidato1, votosValidos)
    const porcentagemCandidato2 = porcentagem(candidato2, votosValidos)
    const porcentagemCandidato3 = porcentagem(candidato3, votosValidos)

    const [maior, meio, menor] = ordernar_valores_v1(porcentagemCandidato1, porcentagemCandidato2, porcentagemCandidato3)

    if(porcentagemBrancos > (porcentagemCandidato1 + porcentagemCandidato2 + porcentagemCandidato3)){
        return "Nova eleição: quantidade de votos brancos é maior que 50%"
    } else if(porcentagemCandidato1 === porcentagemCandidato2 && porcentagemCandidato1 === porcentagemCandidato3 && porcentagemCandidato2 === porcentagemCandidato3){
        return "Nova Eleição: Empate"
    } else if (maior === porcentagemCandidato1){
        return "Candidato 1 venceu a eleição"
    } else if (maior === porcentagemCandidato2){
        return "Candidato 2 venceu a eleição"
    } else if (maior === porcentagemCandidato3){
        return "Candidato 3 venceu a eleição"
    } else {
        return "Nova Eleição: Empate"
    }
}


main()