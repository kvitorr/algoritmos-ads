// 6. Leia uma velocidade em km/h, calcule e escreva esta velocidade em m/s. (Vm/s = Vkm/h / 3.6)

import {input, print} from "./io_utils.js"

function main(){

    //Entrada
    const vel = Number(input('Digite a velocidade em km/h: '))

    //Processamento
    const vel_transform = vel / 3.6

    //Saída
    print(`${vel} km/h é igual a ${vel_transform} m/s `)

}
main()