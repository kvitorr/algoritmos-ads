import prompt from 'prompt-sync'
const input = prompt()

function main(){

    //Entradas e variáveis
    const turno = input('Em qual turno o aluno estuda? ')

    //Processamento
    if(turno === "M"){
        console.log('Bom Dia!')
    } else if (turno === "T"){
        console.log('Boa tarde!')
    } else if (turno === "N"){
        console.log('Boa noite!')
    } else {
        console.log('Valor Inválido!')
    }
} main()