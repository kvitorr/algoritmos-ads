
//Importanto prompt
import prompt from 'prompt-sync'
const input = prompt()

function main(){

    //Entradas
    const numero = Number(input('Digite um número: '))

    //Processamento
    if(numero === 0){
        console.log(`O número ${numero} não possui sinal`)
    } else if (numero > 0){
        console.log(`O número ${numero} é positivo`)
    } else {
        console.log(`O número ${numero} é negativo`)
    }
}
main()