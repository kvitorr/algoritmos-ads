//44. Sabendo que latão é constituído de 70% de cobre e 30% de zinco, escreva um algoritmo que calcule a quantidade de cada um desses componentes para se obter certa quantidade de latão (em kg), informada pelo usuário.

import {input, print} from "./io_utils.js"


function main() {

    //Entrada
    const latao = Number(input('Digite a quantidade de latão em KG que voce deseja: '))

    //Saída
    print(` Será necessário ${latao * 0.70} kg de cobre e ${latao * 0.30} kg's de zinco`)
    
 } main()