// 1. Leia uma velocidade em m/s, calcule e escreva esta velocidade em km/h. (Vkm/h = Vm/s * 3.6)

// importando funções input e print
import {input, print} from "./io_utils.js"


function main(){
    
    //Entrada
    const velocidade = Number(input('Digite a velocidade em metros por segundos: '))

    //Processamento
    const calculo = vel * 3.6

    //Saída
    print(`${velocidade} m/s é igual a ${calculo} km/h `)

}

main()
