import {input} from "./io_utils.js"

function main() {

    //Entradas (Vários dados em uma linha)
    const peca1 = input('Digite o código da peça 1, o número de peças e o valor unitário de cada peça (separado por espaço) ')
    const peca2 = input('Digite o código da peça 2, o número de peças e o valor unitário de cada peça (separado por espaço)')

    //P1 (vetor) vai receber os dados de peca1 através do .split()
    const p1 = peca1.split(" ")
    const p2 = peca2.split(" ")


    //Cálculo do valor das duas peças, peças * unidade
    const pagamento = (Number(p1[1]) * Number(p1[2])) + (Number(p2[1]) * Number(p2[2]))

    //Saída
    console.log(`VALOR A PAGAR: R$ ${pagamento.toFixed(2)}`)
}

main()