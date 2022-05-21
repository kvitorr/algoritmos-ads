import prompt from 'prompt-sync'
const input = prompt()


function main(){

    const semana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]

    const numero = Number(input('Digite um número (1-7): '))

    if(numero < 1 || numero > 7){
        console.log('Valor inválido')
    } else {
        console.log(semana[numero-1])
    }

} main()