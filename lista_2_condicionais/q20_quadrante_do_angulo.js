//Leia a medida de um ângulo (entre 0 e 360º) e escreva o quadrante (primeiro, segundo, terceiro ou quarto) em que o ângulo se localiza.

import {input} from './io_utils.js'

function main(){

    //Entradas e variáveis
    const angulo = Number(input("Digite um ângulo (entre 0 e 360°) para a verificação do quadrante: "))
    let quadrante

    //Processamento

    if(verifica_angulo(angulo)){
        if (angulo === 0 || angulo === 90 || angulo === 180 || angulo === 270 || angulo === 360){
            quadrante = angulo_sobre_eixo(angulo)

            //Saídas
            console.log(`\t${angulo}° está localizado no ${quadrante}`)

        } else {
            quadrante = localiza_quadrante(angulo)

            //Saídas
            console.log(`\t${angulo}° está localizado no ${quadrante} quadrante`)
        }
    } else {
        console.log("\tO ângulo digitado não está entre 0° e 360°")
    }

} 

function verifica_angulo(angulo){
    if (angulo <= 360 && angulo >= 0){
        return true 
    } else {
        return false
    }
}

function angulo_sobre_eixo(angulo){
    if(angulo === 0 || angulo === 180 || angulo === 360) {
        return "Eixo das abscissas"

    } else { //angulo === 90 ou angulo === 270
        return "Eixo das ordenadas"
    }
}


function localiza_quadrante(angulo){
    if(angulo > 0 && angulo < 90){
        return 1

    } else if (angulo > 90 && angulo < 180) {
        return 2

    } else if (angulo > 180 && angulo < 270) {
        return 3

    } else {
        return 4
    }
}


main()