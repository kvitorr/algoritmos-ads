import prompt from 'prompt-sync'
const input = prompt()

function main(){

    //Entradas
    const sexo = input('Digite seu sexo (F - Feminino; M - Masculino): ')

    if(sexo === "F"){
        console.log('F - Feminino')
    } else if (sexo === "M"){
        console.log('M - Masculino')
    } else {
        console.log('Sexo Inválido')
    }

} main()