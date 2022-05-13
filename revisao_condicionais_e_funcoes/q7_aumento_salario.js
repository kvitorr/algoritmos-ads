import prompt from 'prompt-sync'
const input = prompt()

function main(){

    //Entradas e declaração de variáveis
    let salario = Number(input('Digite o salário do colaborador: '))
    let porcentagem_aumento = 0

    //Processamento
    while(salario < 0 || isNaN(salario)){
        console.log('Erro: Salário incorreto.')
        salario = Number(input('Digite o salário do colaborador: '))
    }

    if(salario >= 1500){
        porcentagem_aumento = 0.05
    } else if (salario > 700){
        porcentagem_aumento = 0.1
    } else if (salario > 280 ){
        porcentagem_aumento = 0.15
    } else {
        porcentagem_aumento = 0.2
    }

    const salario_reajustado = salario*(1 + porcentagem_aumento)
    const valor_do_aumento = salario_reajustado - salario

    console.log(`Salário antes do reajuste: R$ ${salario}`)
    console.log(`Percentual de aumento aplicado: ${porcentagem_aumento * 100} %`)
    console.log(`Valor do aumento: R$ ${valor_do_aumento}`)
    console.log(`Novo salário: R$ ${salario_reajustado}`)
} main()