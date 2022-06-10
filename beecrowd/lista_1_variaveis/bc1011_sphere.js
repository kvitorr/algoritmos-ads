import {input} from "./io_utils.js"

function main() {

    //Entradas
    const r = input('DIgite o valor do raio da esfera: ')
    const pi = 3.14159

    //Processamento do Cálculo
    const volume = (4.0/3)*pi*(r**3)

    //Saída
    console.log(`VOLUME = R$ ${volume.toFixed(3)}`)
}

main()