import prompt from 'prompt-sync'
const input = prompt()




function main(){

    let nome = ""
    let preco = 0
    let quantidade = 0

    let valorTotal = 0
    let resumo = ""


    while(true){

        console.log('\n--- NOVO PRODUTO---')
        
        nome = input('Nome do produto: ') 
        if(nome === "FIM") break

        preco = Number(input('Preço do produto: '))
        quantidade = Number(input('Quantidade do produto: '))

        valorTotal = precoComDesconto(preco, quantidade)

        resumo += `Produto: ${nome}. Quantidade: ${quantidade}. Valor a ser pago: R$ ${valorTotal}\n`

    }

    console.log('----- Resumo das Compras -----')
    console.log(resumo)

} 

function precoComDesconto(preco, quantidade){

    const valor = preco * quantidade

    if(quantidade > 50){
        return valor * 0.75
    } else if (quantidade > 21){
        return valor * 0.80
    } else if (quantidade > 11){
        return valor * 0.90
    } else if (quantidade > 0) {
        return valor
    }

}

main()