import prompt from 'prompt-sync'
const input = prompt()

function main(){


    let contaPar = 0
    let contaImpar = 0
    let contaPositivo = 0
    let contaNegativo = 0

    let numero1 = Number(input('Digite um número para ser analisado: '))

    if(ehMultiplo(numero1, 2)){
        contaPar++
    } else if(!ehMultiplo(numero1, 2)) {
        contaImpar++
    }

    if(numero1 > 0){
        contaPositivo++
    } else if (numero1 < 0){
        contaNegativo++
    }




    let numero2 = 0

    

    let maior = 0, menor = 0

    do{
        numero2 = Number(input('Digite o outro número: '))
        if(ehMultiplo(numero2, 2)){
            contaPar++
        } else if(!ehMultiplo(numero2, 2)) {
            contaImpar++
        }
    
        if(numero2 > 0){
            contaPositivo++
        } else if (numero2 < 0){
            contaNegativo++
        }

        [maior, menor] = menorEmaior(numero1, numero2)

        while(menor === 0){
            console.log('ERRO: Não existe divisão por zero')
            maior = menor
            menor = Number(input('Digite um novo número: '))
            if(ehMultiplo(menor, 2)){
                contaPar++
            } else if(!ehMultiplo(menor, 2)) {
                contaImpar++
            }
        
            if(menor > 0){
                contaPositivo++
            } else if (menor < 0){
                contaNegativo++
            }
        }

        numero1 = numero2
    } while(!ehMultiplo(maior, menor))



    console.log(`\nForam digitados ${contaPar} número(s) par(es)`)
    console.log(`Foram digitados ${contaImpar} número(s) impar(es)`)
    console.log(`Foram digitados ${contaPositivo} número(s) positivo(s)`)
    console.log(`Foram digitados ${contaNegativo} número(s) negativo(s)\n`)

    





} 


const ehMultiplo = (n1, n2) => {return ((n1%n2)===0)}
function menorEmaior(n1, n2){
    if(n1 > n2){
        return [n1, n2]
    } else {
        return [n2, n1]
    }
}




main()