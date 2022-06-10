import { get_number } from "./utility.js"




function main(){

    const n = get_number('N: ')
    let codigo
    let horas_trabalhadas
    let qtd_de_dependentes

    let salario
    let inss
    let ir

    let salario_liquido


    for (let index = 0; index < n; index++) {

        console.log(`Cadastro do ${index + 1}º funcionário: `)

        codigo = get_number('Código: ')
        horas_trabalhadas = get_number('Horas trabalhadas: ')
        qtd_de_dependentes = get_number('Quantidade de dependentes: ')

        
        salario = calcula_salario(horas_trabalhadas, qtd_de_dependentes)
        inss = get_inss(salario)
        ir = get_ir(salario)

        salario_liquido = salario - inss - ir

        printa_relatorio(salario_liquido, inss, ir)

    }


} 

function calcula_salario(horas_trabalhadas, qtd_de_dependentes){
    const salario = horas_trabalhadas * 12 + 40 * qtd_de_dependentes
    
    return salario
}

function get_inss(salario){
    return salario * 0.085
}

function get_ir(salario){
    return salario * 0.05
}

function printa_relatorio(salario, inss, ir){

    console.log('\n===== Relatório =====')
    console.log(`INSS:              R$ ${inss.toFixed(2)}`)
    console.log(`IR:                R$ ${ir.toFixed(2)}`)
    console.log(`Salário líquido:   R$ ${salario.toFixed(2)}\n`)

}



main()