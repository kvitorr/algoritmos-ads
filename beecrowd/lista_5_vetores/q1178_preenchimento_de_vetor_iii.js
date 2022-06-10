import fs from 'fs'
const lines = fs.readFileSync('./input/q1178_preenchimento_de_vetor_iii.txt', 'utf-8').split('\r\n')

function main(){

    let n = Number(lines[0])
    n = Number(n.toFixed(4))
    const vetor = new Array(100)

    const vetor_modificado = preenchimento_do_vetor(vetor, n)

} 

function preenchimento_do_vetor(vetor, n){

    vetor[0] = n
    let elemento = n
    console.log(`N[${0}] = ${(vetor[0]).toFixed(4)}`) 


    for (let index = 1; index < vetor.length; index++) {


        elemento = elemento/2
        vetor[index] = elemento
        if(vetor[index] > 0.8) console.log(`N[${index}] = ${(vetor[index].toFixed(6))}`) 
        else console.log(`N[${index}] = ${arredonda(vetor[index])}`) 



    }
    return vetor
}

function arredonda(numero){

    const number = numero * 10000

    const parte_inteira = Math.trunc(number)
    const parte_decimal = number - parte_inteira

    if(parte_decimal >= 0.5 && numero < 0.2){
        const numero_arredondado = parte_inteira + 1
        return numero_arredondado/10000
    } else if (numero > 0.1 && numero < 1){
        return Math.trunc(number)/10000
    }

    return numero.toFixed(4)

}

main()