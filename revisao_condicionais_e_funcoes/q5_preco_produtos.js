import prompt from "prompt-sync";
const input = prompt()

function main(){

    //Entradas
    let [preco1, preco2, preco3] = input('Digite três preços de uma mesma mercadoria, separados por espaço: ').split(' ').map(Number)

    while(isNaN(preco1) || isNaN(preco2) || isNaN(preco3) || negativeNumber(preco1, preco2, preco3)){
        [preco1, preco2, preco3] = input('ERRO: Preços inválidos. Digite novamente, 3 preços de uma mesma mercadoria, separados por espaço: ').split(' ').map(Number)
    }

    // Processamento e Saída
    const [maior, meio, menor] = ordem_crescente(preco1, preco2, preco3)

    console.log(`O produto a ser comprado é que possui o valor de R$ ${menor}`)
} 

function ordem_crescente(n1, n2, n3){
    if(n1 > n2){
        if(n2 > n3){
            return [n1, n2, n3]
        } else if (n3 > n1){
            return [n3, n1, n2]
        } else {
            return [n1, n3, n2]
        }
    } else { // n2 > n1
        if(n1 > n3){
            return [n2, n1, n3]
        } else if (n3 > n2){
            return [n3, n2, n1]
        } else {
            return [n2, n3, n1]
        }
    }
}

function negativeNumber(n1, n2, n3){

    if(n1 < 0 || n2 < 0 || n3 < 0){
        return true
    } else { return false }
}


main()