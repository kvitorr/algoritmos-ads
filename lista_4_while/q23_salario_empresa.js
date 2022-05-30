import prompt from 'prompt-sync'
const input = prompt()

function main(){

    let codigo = 0
    let horasTrabalhadas = 0
    let dependentes = 0

    let salarioSemDescontos = 0
    let employeesNumber = Number(input('Número de funcionários: '))

    let inss = 0
    let ir = 0
    let salarioLiquido = 0
    let contador = 0

    while(contador < employeesNumber){

        codigo = Number(input('Código do Funcionário: '))
        horasTrabalhadas = Number(input('Horas trabalhadas: '))
        dependentes = Number(input('Dependentes: '))

        salarioSemDescontos = salario(horasTrabalhadas, dependentes)

        inss = calculaINSS(salarioSemDescontos)
        ir = calculaIR(salarioSemDescontos)
        salarioLiquido = salarioSemDescontos - (inss + ir)

        console.log('\nResumo ---')
        console.log(`\tCódigo do funcionário:       ${codigo}`)
        console.log(`\tINSS:                        ${inss.toFixed(2)}`)
        console.log(`\tIR:                          ${ir.toFixed(2)}`)
        console.log(`\tSalário Líquido:             ${salarioLiquido.toFixed(2)}`)

        contador++
    }
}

const calculaINSS = (salario) => {return 0.085 * salario}
const calculaIR = (salario) => {return 0.05 * salario}

function salario(horasTrabalhadas, dependentes){
    const salario = horasTrabalhadas * 12 + dependentes * 40

    return salario
}



main()