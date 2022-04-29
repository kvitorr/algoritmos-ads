import {print, input} from "./io_utils.js"



function main(){
    
        //Entradas
        const tempo = input('Qual foi o tempo gasto na viagem (em horas)? ')

        const vel = input('Qual foi a velocidade média durante o percurso (em km/h) ')

        //Calculo da distancia percorrida (km)
        const dist = tempo * vel

        //Calculo da quantidade de litros necessários

        const litros = dist / 12

        // toFixed(numero de casas decimais)
        print(`A quantidade de litros necessária para realizar a viagem é: ${litros.toFixed(3)} `)

}

main()

