//Leia duas notas de um aluno e escreva na tela a palavra "Aprovado" se a média das duas notas for maior ou igual a 7.0. Caso a média seja inferior a 7.0, o programa deve ler a nota do exame e calcular a média final. Se esta média for maior ou igual 5.0, o programa deve escrever "Aprovado", caso contrário deve escrever "Reprovado"

import {input} from './io_utils.js'

function main(){

    //Entradas
    const [nota_1, nota_2] = input("Digite duas notas(ex.: 5 9): ").split(" ").map(Number)

    //Processamento 
    const media_var = media(nota_1, nota_2)

    if(media_var >= 7){
        //Saída
        console.log("Aprovado")
    } else {
        const nota_ef = Number(input("Digite a nota do exame final: "))
        const media_final = media(media_var, nota_ef)

        if(media_final >= 5){
            //Saída
            console.log("Aprovado")
        } else {
            //Saída
            console.log("Reprovado")
        }
    }
} 

//Funções
const media = (n1, n2) => {return (n1+n2)/2}

main()