import prompt from 'prompt-sync'
const input = prompt()


function main(){
    const p1 = input('Telefonou para a vítima?   : ')
    const p2 = input('Esteve no local do crime?  : ')
    const p3 = input('Mora perto da vítima?      : ')
    const p4 = input('Devia para a vítima?       : ')
    const p5 = input('Já trabalhou com a vítima? : ')

    const quantidade_de_sim = resultado(p1, p2, p3, p4, p5)

    const classificacao = verificar_classificacao(quantidade_de_sim)

    console.log(classificacao)

}
function resultado(p1, p2, p3, p4, p5){
    let contador = 0

    if(p1 === 'sim'){
        contador = contador + 1
    }

    if(p2 === 'sim'){
        contador = contador + 1
    }

    if(p3 === 'sim'){
        contador = contador + 1
    }

    if(p4 === 'sim'){
        contador = contador + 1
    }

    if(p5 === 'sim'){
        contador = contador + 1
    }

    return contador

}

function verificar_classificacao(qtd_sim){
    
    if(qtd_sim === 5){
        return 'Assassino'
    } else if (qtd_sim === 3 || qtd_sim === 4){
        return 'Cúmplice'
    } else if (qtd_sim === 2){
        return 'Suspeito'
    } else {
        return 'Inocente'
    }
}

main()