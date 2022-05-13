import prompt from "prompt-sync";
const input = prompt()

function main(){

    //Entradas
    let [nota1, nota2] = input('Digite duas notas de um aluno, separadas por espaço: ').split(' ').map(Number)

    while(!verifica_nota_valida(nota1) || !verifica_nota_valida(nota2)){
        [nota1, nota2] = input('ERRO: Nota inválida. Digite as duas notas corretamente (ex: 7.5 6.9) ').split(' ').map(Number)
    }
    //Processamento

    if(media(nota1, nota2) === 10){
        console.log('Aprovado com Distinção')
    } else if (media(nota1, nota2) >= 7){
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
} 

function verifica_nota_valida(nota){
    if(nota < 0 || nota > 10 || isNaN(nota)){
        return false
    }
    return true
}


const media = (n1, n2) => (n1+n2)/2


main()