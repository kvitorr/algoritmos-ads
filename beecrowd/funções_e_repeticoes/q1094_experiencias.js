import fs from 'fs'

const input = fs.readFileSync('./q1094_input.txt', 'utf-8');
let lines = input.split('\r\n');

function main(){

    //Entradas e Variáveis
    const numeros_de_experimentos = Number(lines.shift())
    let n = 0

    let quantidade_de_animais 
    let tipo_de_animal

    let sapos = 0
    let ratos = 0
    let coelhos = 0

    //Processamento
    while(numeros_de_experimentos > n) {
    [quantidade_de_animais, tipo_de_animal] = experimento(lines)


        if (tipo_de_animal === "C"){
            coelhos += quantidade_de_animais
        } else if (tipo_de_animal === "R") {
            ratos += quantidade_de_animais
        } else if (tipo_de_animal === "S"){
            sapos += quantidade_de_animais
        }
   n++
    }

    //Saídas
    const total_de_cobaias = coelhos + ratos + sapos
    const porcentagem_de_coelhos = porcentagem(coelhos, total_de_cobaias)
    const porcentagem_de_ratos = porcentagem(ratos, total_de_cobaias)
    const porcentagem_de_sapos = porcentagem(sapos, total_de_cobaias)

    console.log(`Total: ${total_de_cobaias} cobaias`)
    console.log(`Total de coelhos: ${coelhos}`)
    console.log(`Total de ratos: ${ratos}`)
    console.log(`Total de sapos: ${sapos}`)

    console.log(`Percentual de coelhos: ${porcentagem_de_coelhos.toFixed(2)} %`)
    console.log(`Percentual de ratos: ${porcentagem_de_ratos.toFixed(2)} %`)
    console.log(`Percentual de sapos: ${porcentagem_de_sapos.toFixed(2)} %`)
}


const porcentagem = (parcela, total) => {return ((parcela/total)*100)}

function experimento(lines){
    const caso = lines.shift()
    const intermediario = caso.split(' ')    

    const quantidade_de_animais = Number(intermediario[0])
    const tipo_de_animal = String(intermediario[1])

    return [quantidade_de_animais, tipo_de_animal]
}

main()

