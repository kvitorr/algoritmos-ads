import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const qtdHabitantes = Number(input('Número de habitantes: '))

    let salario = 0
    let qtdFilhos = 0

    let contador = 0
    let salarioTotal = 0
    let filhosTotal = 0
    let salarios1000 = 0


    while(contador < qtdHabitantes){

        console.log('\nNovo habitante: ')
        salario = Number(input('Salário: '))
        qtdFilhos = Number(input('Quantidade de Filhos: '))

        if(salario <= 1000) salarios1000++
        
        salarioTotal += salario
        filhosTotal += qtdFilhos

        contador++
    }

    const mediaSalarial = media(salarioTotal, qtdHabitantes)
    const mediaFilhos = media(filhosTotal, qtdHabitantes)
    const porcentagemSalario1000 = porcentagem(salarios1000, qtdHabitantes)
    
    console.log('Resumo ------------')
    console.log(`\tMédia de salário da população:               ${mediaSalarial.toFixed(2)}`)
    console.log(`\tMédia de número de filhos:                   ${mediaFilhos.toFixed(2)}`)
    console.log(`\tPercentual de pessoas com salário de até R$  ${porcentagemSalario1000.toFixed(2)}`)

} 

const media = (n1, n2) => {return n1/n2}
const porcentagem = (parcial, total) => {return (parcial/total)*100}

main()