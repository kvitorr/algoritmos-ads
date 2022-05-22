import prompt from 'prompt-sync'
const input = prompt()

function main(){

    let ponto = Number(input('Qual jogador ganhou o ponto? (1 ou 2): '))
    let pontosJogador1 = 19
    let pontosJogador2 = 19


    if(ponto === 1){
        pontosJogador1++
    } else if (ponto === 2){
        pontosJogador2++
    }


   while(condicao1(pontosJogador1, pontosJogador2) && condicao2(pontosJogador1, pontosJogador2) && condicao1(pontosJogador2, pontosJogador1) && condicao2(pontosJogador2, pontosJogador1)){

        
        ponto = Number(input('Qual jogador ganhou o ponto? (1 ou 2): '))

        if(ponto === 1){
            pontosJogador1++
        } else if (ponto === 2){
            pontosJogador2++
        }

    }


    if(pontosJogador1 > pontosJogador2) {
        console.log(`\tO vencedor foi o Jogador 1 com ${pontosJogador1} pontos`)
    } else if (pontosJogador2 > pontosJogador1){
        console.log(`\tO vencedor foi o Jogador 2 com ${pontosJogador2} pontos`)

    }
}

function condicao1(pontosJogador1, pontosJogador2){
    if(pontosJogador1 === 21 && Math.abs(pontosJogador1 - pontosJogador2) >= 2){
        return false
    }
    return true
}

function condicao2(pontosJogador1, pontosJogador2){
    if((pontosJogador1 > 21) && Math.abs(pontosJogador1 - pontosJogador2) >= 2){
        return false
    }
    return true
}


main()