//Leia 5 números inteiros, calcule a sua média e escreva os que são maiores que a média

import {input} from './io_utils.js'

function main(){

    //Entradas
    const [number_1, number_2, number_3, number_4, number_5] = input("Digite 5 números inteiros(ex.: 5 7 8 9 7): ").split(' ').map(Number)
    let resultado = ''

    //Processamento
    const media_5 = media(number_1, number_2, number_3, number_4, number_5)

    resultado += maior_que_a_media(number_1, media_5) 
    resultado += maior_que_a_media(number_2, media_5) 
    resultado += maior_que_a_media(number_3, media_5) 
    resultado += maior_que_a_media(number_4, media_5) 
    resultado += maior_que_a_media(number_5, media_5) 

    //Saídas

    if (resultado === ''){
        console.log('\tNenhum número é maior que a média')
    } else {
        console.log(`\tA média das cinco notas é: ${media_5}\n\tOs números maiores que a média são: ${resultado}`)
    }
} 


//Funções
const media = (n1, n2, n3, n4, n5) => {return (n1+n2+n3+n4+n5)/5}

function maior_que_a_media(numero, media){
    if (numero > media){
        return String(numero) + " "
    } else { 
        return ""
    }
} 

main()