//Distância entre dois pontos

import {input, print} from "./io_utils.js"


function main() {

    //Entrada
    const x1 = Number(input('Digite a coordenada x1:'))
    const y1 = Number(input('Digite a coordenada y1:'))
    const x2 = Number(input('Digite a coordenada x2:'))
    const y2 = Number(input('Digite a coordenada y2:'))

    const a = (x2-x1)**2
    const b = (y2-y1)**2
    const distancia = (a + b)**(1/2)


    print(`A distancia entre os dois pontos é: ${distancia}`)

} main()