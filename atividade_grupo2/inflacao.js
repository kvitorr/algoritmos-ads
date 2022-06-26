
import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const salario = Number(input('Salário: '))
    const inflacao = Number(input('Porcentagem da inflação: '))/100

    const salario_atualizado = salario + salario * inflacao
    let salario_atual = salario
    let cedula


    while(salario_atual < salario_atualizado){

        cedula = get_aumento_em_cedulas()
        salario_atual += cedula

        console.log(`Incremento de R$ ${cedula}. Total: R$ ${salario_atual.toFixed(2)} `)

    }

    console.log(`\tSalário atualizado: ${salario_atual}.`)
} 

function get_aumento_em_cedulas(){

    const vetor = [2, 5, 10, 20, 50, 100, 200]

    const cedula = Number(input('Digite uma cédula: '))

    for(let cedulas of vetor){

        if(cedula === cedulas){
            return cedula
        } 
    }

    console.log('ERRO: Cédula inválida.')
    return get_aumento_em_cedulas()


}



main()