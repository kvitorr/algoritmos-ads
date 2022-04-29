//Solução de um sistema de equações lineares

import {input, print} from "./io_utils.js"


function main(){

    //Entradas
    const a = Number(input('Digite o valor de a:'))
    const b = Number(input('Digite o valor de b:'))
    const c = Number(input('Digite o valor de c:'))
    const d = Number(input('Digite o valor de d :'))
    const e = Number(input('Digite o valor de e :'))
    const f = Number(input('Digite o valor de f :'))

    //Processamento
    const z = ((a-e) - (b-d))

    const x = ((c-e)-(b-f))/z

    const y = ((a-f) - (c-d))/z

    //Saída
    print(` x = ${x} e y = ${y}`)

} main()