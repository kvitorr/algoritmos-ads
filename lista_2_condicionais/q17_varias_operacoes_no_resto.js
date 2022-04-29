//Leia valores inteiros em duas variáveis distintas e se o resto da divisão da primeira pela segunda for: 

import { input } from "./io_utils.js"

    //a) 1, escreva a soma dessas variáveis mais o resto da divisão; 

    //b) 2, escreva se o primeiro e o segundo valor são pares ou ímpares; 
    
    //c) 3, multiplique a soma dos valores lidos pelo primeiro; 
    
    //d) 4, divida a soma dos números lidos pelo segundo, se este for diferente de zero. 
    
    //e) Em qualquer outra situação, escreva o quadrado dos números lidos


    function main(){

        //Entradas
        const [number_1, number_2] = input("Digite dois números (ex.: 5 8): ").split(' ').map(Number)
        const resto_n1_sobre_n2 = number_1 % number_2 
        let controle1 = 0
        let controle2 = 0
        

        //Processamento

        if( resto_n1_sobre_n2 === 1){

            //a) 1, escreva a soma dessas variáveis mais o resto da divisão; 
            controle1 = resto_1(number_1, number_2, resto_n1_sobre_n2)
            console.log(`\tResto: 1. A soma das variáveis mais o resto da divisão é: ${controle1}`)

        } else if (resto_n1_sobre_n2 === 2) {

            //b) 2, escreva se o primeiro e o segundo valor são pares ou ímpares; 
            if (resto_2(number_1, number_2) === 1) {
                console.log('\tResto 2. Os dois números são pares')

            } else if (resto_2(number_1, number_2) === 2){
                console.log('\tResto 2. Os dois números são ímpares')

            } else if (resto_2(number_1, number_2) === 3){
                console.log(`\tResto 2. ${number_1} é par e ${number_2} é ímpar`)

            } else {
                console.log(`\tResto 2. ${number_1} é ímpar e ${number_2} é par`)
            }
            

        } else if (resto_n1_sobre_n2 === 3) {

            //c) 3, multiplique a soma dos valores lidos pelo primeiro; 
            controle1 = resto_3(number_1, number_2)
            console.log(`\tResto: 3. O resultado da multiplicação de ${number_1} pela soma das variáveis é: ${controle1}`)

        } else if (resto_n1_sobre_n2 === 4) {
            
            //d) 4, divida a soma dos números lidos pelo segundo, se este for diferente de zero
            controle1 = resto_4(number_1, number_2)
            console.log(`\tResto 4. A divisão de ${number_2} pela soma das variáveis é: ${controle1}`)

        } else {
            
            //e) Em qualquer outra situação, escreva o quadrado dos números lidos
            controle1 = number_1 * number_1
            controle2 = number_2 * number_2
            console.log(`\tO quadrado de ${number_1} é ${controle1}\n\tO quadrado de ${number_2} é ${controle2}`)
        }
    } 
    

const resto_1 = (n1, n2, rest) => {return n1 + n2 + rest}
    
function resto_2 (n1, n2){
    let boolean_n1 
    let boolean_n2

    if(n1 % 2 === 0){
        boolean_n1 = true
    } else {
        boolean_n1 = false
    }

    if(n2 % 2 === 0){
        boolean_n2 = true
    } else {
        boolean_n2 = false
    }

    if(boolean_n1 && boolean_n2){
        return 1
    } else if (!(boolean_n1) && !(boolean_n2)){
        return 2
    } else if (boolean_n1 && !(boolean_n2)){ //! inverte o valor, portanto se resto_2(number2) não for par, vai dar true
        return 3
    } else {
        return 0
    }
}

const resto_3 = (n1, n2) => {return (n1 + n2) * n1}

const resto_4 = (n1, n2) => {return (n1 + n2) / n2}
    
    main()