import prompt from 'prompt-sync'
const input = prompt()


function main(){

    //Entradas e declaração de variáveis
    const [valor_hora, horas_trabalhadas] = input('Digite o valor da hora trabalhada e quantas horas o colaborador trabalhou, separados por espaço: ').split(' ').map(Number)


    const salario_bruto = valor_hora * horas_trabalhadas

    const imposto_sindicato = salario_bruto * 0.03
    const FGTS = salario_bruto * 0.11
    const [descontoIR, porcentagem_IR] = IR(salario_bruto)


    const total_de_descontos = descontoIR + imposto_sindicato
    const salario_liquido = salario_bruto - total_de_descontos
    
    //Processamento

    console.log(`\nSalário Bruto: (${valor_hora} * ${horas_trabalhadas})      :R$ ${salario_bruto.toFixed(2)}`)

    console.log(`(-) IR (${porcentagem_IR}%)                     :R$ ${descontoIR.toFixed(2)}`)
    
    console.log(`(-) Imposto Sindical (3%)      :R$ ${imposto_sindicato.toFixed(2)}`)

    console.log(`FGTS (11%)                     :R$ ${FGTS.toFixed(2)}`)

    console.log(`Total de descontos             :R$ ${total_de_descontos.toFixed(2)}`)

    console.log(`Salário Líquido                :R$ ${salario_liquido.toFixed(2)}\n`)
} 

function IR(salario){
    let desconto = 0

    if(salario > 2500){
        desconto = 0.20
    } else if (salario > 1500){
        desconto = 0.1
    } else if (salario > 900){
        desconto = 0.05
    } else {
        desconto = 0
    }
    const desconto_do_salario = salario * desconto
    const porcentagem = desconto * 100 

    return [desconto_do_salario, porcentagem]
} main()
