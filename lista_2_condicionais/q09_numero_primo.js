import {input} from "./io_utils.js"

function main() {

    //Entradas
    const numero = Number(input('Digite um número entre 0 e 100: '))

    //Processamento
    const primo = numero_primo(numero)


    if(numero < 0 || numero > 100){
        //Saída
        console.log("\nO número digitado está fora do intervalo estabelecido\n")

    } else if (primo){
        //Saída
        console.log("\nO número digitado é primo\n")

    } else {
        //Saída
        console.log("\nO numero digitado não é primo\n")
    }
} 

function numero_primo(n1){

    if(n1 === 1) {
        return false

    } else if (n1 === 2 || n1 === 3 || n1 === 5 || n1 === 7) {
        return true

    } else if ( ((n1 % 2) !== 0) && ((n1 % 3) !== 0) && ((n1 % 5) !== 0) && (((n1 % 7) !== 0)) ){
        return true

    } else {
        return false
    }
}


main()