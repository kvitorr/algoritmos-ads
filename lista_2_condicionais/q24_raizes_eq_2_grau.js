//Leia os coeficientes (A, B e C) de uma equação de 2° grau e escreva suas raízes. Vale lembrar que o coeficiente A deve ser diferente de 0 

import { input } from "./io_utils.js";


function main() {

    //Entradas e variáveis
    const [a, b, c] = input('Digite os coeficientes, A, B e C, respectivamente, de uma equação de 2° grau, separando-os por espaço: ').split(' ').map(Number)

    const delta_var = delta(a, b, c)

    console.log(delta_var)

    //Processamento
    if(a === 0){
        console.log('\tNão é possível calcular as raízes')
    } else if (delta_var < 0){
        console.log('\tNão é possível calcular as raízes')
    } else {
        const raiz_1 = raiz_pos(a, b, delta_var)
        const raiz_2 = raiz_neg(a, b, delta_var)

        console.log(`\tRaiz 1: ${raiz_1} e Raiz 2: ${raiz_2}`)
    }
} 

const delta = (a, b, c) => {return ((b*b) - (4 * a * c))}
const raiz_pos = (a, b, delta) => {return ((-b) + Math.sqrt(delta))/(2 * a)}
const raiz_neg = (a, b, delta) => {return ((-b) - Math.sqrt(delta))/(2 * a)}

main()