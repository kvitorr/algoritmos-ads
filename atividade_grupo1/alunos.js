import fs from 'fs'
const lines = fs.readFileSync('./alunos_input.txt', 'utf-8').split('\n')


function main(){

    let nome
    let nota1 = 0
    let nota2 = 0
    let nota3 = 0

    let presenca
    let faltas = 0, qtdAulas = 0

    let media = 0
    let nomeMedia = ""
    let somaDasMedias = 0

    let quantidadeDeAlunos = 0

    let contaAprovados = 0
    let contaReprovados = 0
    let contaProvaFinal = 0
    let contaReprovadosFalta = 0

    let porcentagemFalta = 0
    let porcentagemFaltasPermitidas = 0

    while(lines.length > 0){

        [nome, nota1, nota2, nota3, presenca] = lines.shift().split(';')//

        nota1 = Number(nota1)
        nota2 = Number(nota2)
        nota3 = Number(nota3)

        presenca = presenca.split('/')
        faltas = Number(presenca[0])
        qtdAulas = Number(presenca[1])

        media = mediaPonderada(nota1, nota2, nota3)
        somaDasMedias += media

        nomeMedia += nome + " Media: " + media.toFixed(2) + "\n"

        porcentagemFalta = (faltas/qtdAulas) * 100
        porcentagemFaltasPermitidas = qtdAulas * 0.25

        if(porcentagemFalta > porcentagemFaltasPermitidas){
            contaReprovadosFalta++
        } else {

            if(media >= 7){
                contaAprovados++
            } else if (media < 4){
                contaReprovados++
            } else {
                contaProvaFinal++
            }
        }
        quantidadeDeAlunos++
    }


    const mediaClasse = somaDasMedias/quantidadeDeAlunos

    console.log(`------ Média de cada aluno ------`)
    console.log(nomeMedia)
    console.log(`------ Fim das médias ------`)
    console.log(`Média da classe: ${mediaClasse.toFixed(2)}`)
    console.log(`Número de aprovados: ${contaAprovados}`)
    console.log(`Número de reprovados: ${contaReprovados}`)
    console.log(`Número de prova final: ${contaProvaFinal}`)
    console.log(`Reprovados por falta: ${contaReprovadosFalta}`)
} 

const mediaPonderada = (n1, n2, n3) => {return (((n1*1) + (n2*2) + (n3*3))/6)}


main()