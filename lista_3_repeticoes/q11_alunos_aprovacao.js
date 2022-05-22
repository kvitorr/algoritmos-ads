import prompt from 'prompt-sync'
const input = prompt()

function main(){

    let matricula = Number(input('Digite a matrícula do aluno: '))
        
    let contAprovados = 0
    let contReprovados = 0
    let contAlunos = 0

    let nota1
    let nota2
    let nota3 
    let media = 0



    while(matricula !== 0){
        contAlunos++

        if(matricula !== 0){
            nota1 = Number(input('Digite a primeira nota do aluno: '))
            nota2 = Number(input('Digite a segunda nota do aluno: '))
            nota3 = Number(input('Digite a terceira nota do aluno: '))
        }
        
        media = mediaPonderada(nota1, nota2, nota3)

        if(media >= 7){
            contAprovados++
        } else if(media < 7) {
            contReprovados++
        }

        console.log('\n\tCadastro de um novo aluno: ')
        matricula = Number(input('Digite a matrícula do aluno: '))
    }

    console.log('-----Resumo')
    console.log(`\tTotal de aprovados: ${contAprovados}`)
    console.log(`\tTotal de reprovados: ${contReprovados}`)
    console.log(`\tTotal de alunos: ${contAlunos}`)
} 

function mediaPonderada(n1, n2, n3){
    const resultado = ((2*n1) + (3*n2) + (5*n3))/10
    return resultado
}

main()