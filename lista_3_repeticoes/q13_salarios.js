import prompt from 'prompt-sync'
const input = prompt()



function main(){

    //Entradas e definição de variáveis
    let salary = Number(input('Digite o salário atual: '))

    let adjustedSalary = 0

    let totalSalaryBefore = 0
    let totalSalaryAfter = 0


    while(salary !== 0){
        totalSalaryBefore += salary
        
        adjustedSalary = salary * (1 + additionSalary(salary))

        totalSalaryAfter += adjustedSalary

        salary = Number(input('Digite o salário atual: '))
    }

    const differenceBetweenSalary = totalSalaryAfter - totalSalaryBefore

    console.log(`\tSoma dos salários atuais: R$ ${totalSalaryBefore}`)
    console.log(`\tSoma dos salários reajustados: R$ ${totalSalaryAfter}`)
    console.log(`\tDiferença entre o salário atual e o reajustado: R$ ${differenceBetweenSalary}`)
}

function additionSalary (salary){
    
    if(salary >= 10000){
        return 0.1
    } else if (salary >= 6000){
        return 0.15
    } else if (salary >= 3000){
        return 0.2
    } else if (salary >= 0){
        return 0.25
    }
} 

main()