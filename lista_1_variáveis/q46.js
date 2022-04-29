//Uma loja vende seus produtos no sistema entrada mais duas prestações, sendo a entrada maior ou igual a cada uma das duas prestações; estas devem ser iguais, inteiras e as maiores possíveis. 

//Por exemplo, se o valor da mercadoria for R$ 270,00, a entrada e as duas prestações são iguais a R$ 90,00; se o valor da mercadoria for R$ 302,00, a entrada é de R$ 102,00 e as duas prestações são iguais a R$ 100,00. Escreva um algoritmo que receba o valor da mercadoria e forneça o valor da entrada e das duas prestações, de acordo com as regras acima.

import {input, print} from "./io_utils.js"


function main() {

    //Entrada
    const preco_total = input('Digite o valor total do produto comprado: ')
    
    //Processamento

    const valor_igual = (preco_total - (preco_total%3))/3 // o valor dividido igualmente entre 3, exemplo: se o valor for 300, entrada = 100, 2 prestações = 100 cada.

    const entrada = valor_igual + preco_total%3 //valor dividido igualmente entre os 3 + o que sobrou sendo adicionado a entrada, dessa forma a entrada será maior ou igual as duas prestações
    const prestacao = valor_igual

    //Saída
    console.log(`Entrada de R$ ${entrada} e duas prestações de R$ ${prestacao} `)


    
 } main()