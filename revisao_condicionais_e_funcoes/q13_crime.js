import prompt from 'prompt-sync'
const input = prompt()


function main(){

    console.log('Digite "sim" ou "nao" para as próximas perguntas: ')

    let contador = 0

    const resposta1 = input('Telefonou para a vítima? ')
    const resposta2 = input('Esteve no local do crime? ')
    const resposta3 = input('Mora perto da vítima? ')
    const resposta4 = input('Devia para a vítima? ')
    const resposta5 = input('Já trabalhou com a vítima? ')


    if(resposta1 === "sim"){
        contador++
    }

    if(resposta2 === "sim"){
        contador++
    }

    if(resposta3 === "sim"){
        contador++
    }

    if(resposta4 === "sim"){
        contador++
    }

    if(resposta5 === "sim"){
        contador++
    }

    if(contador === 5){
        console.log('\tAssassino')
    } else if (contador >= 3){
        console.log('\tCúmplice')
    } else if (contador >= 2){
        console.log('\tSuspeita')
    } else {
        console.log('\tInocente')
    }

} main()