import fs from 'fs'
const lines = fs.readFileSync('./input.txt', 'utf-8').split('\n')


function main(){

    //Entradas
    const qtd_de_testes = Number(lines.shift())
    let contador = 0
    let x, y

    let menor
    let maior

    let numero_em_ordem_crescente
    let numero_intermediario = 0

    let soma_numeros_impares = 0

    while(qtd_de_testes > contador){

        [x, y] = lines.shift().split(' ').map(Number)

        numero_em_ordem_crescente = ordemCrescente(x, y)

        maior = numero_em_ordem_crescente[0]
        menor = numero_em_ordem_crescente[1]


        numero_intermediario = menor + 1

       while(numero_intermediario < maior){
            

            if(impar(numero_intermediario)){
                soma_numeros_impares += numero_intermediario
            }
            numero_intermediario++
        }

        console.log(soma_numeros_impares)
        contador++
        soma_numeros_impares = 0

    }


function ordemCrescente(n1, n2){
    if(n1 > n2){
        return [n1, n2]
    } else {
        return [n2, n1]
    }
}

function impar(n1){
    if(n1 % 2 === 0){
        return false
    } else {
        return true
    }
}

} main()