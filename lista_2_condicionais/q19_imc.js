//Leia a altura (em metros) e peso (em Kg) de uma pessoa, em seguida calcule o indice de massa corpórea (IMC = peso / altura**2). Ao final, escreva se a pessoa está com peso normal (IMC abaixo de 25), obeso (IMC entre 25 e 30) ou obesidade mórbida (IMC acima de 30)

import {input} from './io_utils.js'

function main(){

    //Entradas
    const [altura, peso] = input("Digite sua altura (em metros) e seu peso (em kg) para o cálculo do IMC (ex: 1.73 75):").split(" ").map(Number)

    //Processamento
    const var_IMC = calculo_IMC(altura, peso)
    const resultado_IMC = classifica_IMC(var_IMC)

    //Saídas
    console.log(resultado_IMC)
} 

function calculo_IMC(altura, peso){
    const var_IMC = peso/(altura*altura)
    return var_IMC
}

function classifica_IMC(IMC){
    if (IMC < 25){
        return "Resultado IMC: Normal"
    } else if (IMC >= 25 && IMC <= 30){
        return "Resultado IMC: Obeso"
    } else {
        return "Resultado IMC: Obesidade Mórbida"
    }
}
main()
