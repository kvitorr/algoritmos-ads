import prompt from 'prompt-sync'
const input = prompt()

function main(){

    let emprestimo = 3000
    let total = emprestimo

    let qtdDias = 0


    while(total > 0){
        total = total * (1 + 0.0085) - 200
        qtdDias++
    }

    console.log(`Serão necessários ${qtdDias} dias uteis para concluir o pagamento do empréstimo.`)

} main()