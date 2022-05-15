import fs from 'fs'
const lines = fs.readFileSync('./input.txt', 'utf-8').split('\n')


function main(){

    //Entradas 
    const salario = Number(lines[0])
    let percentual = 0

    //Processamento
    if(salario > 2000){
        percentual = 0.04
    } else if (salario > 1200){
        percentual = 0.07
    } else if (salario > 800){
        percentual = 0.10
    } else if (salario > 400){
        percentual = 0.12
    } else if (salario > 0){
        percentual = 0.15
    }
    const novoSalario = salario * (1+percentual)
    const reajuste = novoSalario - salario
    
    console.log(`Novo salario: ${novoSalario.toFixed(2)}`)
    console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`)
    console.log(`Em percentual: ${(percentual*100).toFixed(0)} %`)

} main()