import * as fs from 'fs'
import prompt from 'prompt-sync'
const input = prompt()

function main(){
    let menu = '**** ROGERPLAY ****'
    menu += '\n1 - Palavras com mais de N letras'
    menu += '\n2 - Mostrar e Contar palavras sem uma determinada letra'
    menu += '\n3 - Mostrar e Contar palavras sem determinadas letras'
    menu += '\n4 - Mostrar e Contar palavras que contém apenas letras de uma determinada série de letras'
    menu += '\n\n0 - Sair'

    const palavras = loadfile().split('\n')

    console.log(`${palavras.length} carregadas!`)

    // estado anterior
    console.log(menu)
    let opcao = Number(input())
    while (opcao !== 0){ // cond. de continuidade
        // trabalho
        if (opcao === 1){
            palavras_com_mais_n_letras(palavras)
        }else if (opcao === 2){
            palavras_sem_letra_x(palavras)
        }else if (opcao === 3){
            palavras_sem_letras_proibidas(palavras)
        } else if (opcao === 4){
            verifica_se_contem_somente_a_serie_de_letras(palavras)
        }

        // convergencia dos dados
        input('<enter> para continuar...')
        console.clear()
        console.log(menu)
        opcao = Number(input())
    }

    console.log('Fim!')
}


//EXERCÍCIO 9.1


function palavras_com_mais_n_letras(palavras){
    let contador = 0
    const qtd = input('Mais que quantas letras: ')
   for (let palavra of palavras){
       if (palavra.length > qtd){
           console.log(palavra)
           contador++
       }
   } 
   const percentual = (contador / palavras.length) * 100
   console.log(`Existem ${contador} (${percentual.toFixed(3)}%) com mais de ${qtd} letras`)
}


//EXERCÍCIO 9.2


function palavras_sem_letra_x(palavras){
    const letter = input('Sem qual letra? ')
    let contador = 0
   for (let palavra of palavras){
       if (has_no_letter(palavra, letter)){
           console.log(palavra)
           contador++
       }
   } 
   const percentual = (contador / palavras.length) * 100
   console.log(`Existem ${contador} (${percentual.toFixed(3)}%) sem a letra "${letter}"`) 
}

function has_no_letter(palavra, letter){
    for (let letra of palavra){
        if (letra === letter){
            return false
        }
    }
    return true
}


// EXERCÍCIO 9.3

function avoids(palavra, letras_proibidas){

    for(let letra of palavra){
        
        for(let letra_proibida of letras_proibidas){
            if(letra === letra_proibida){
                return false
            }
        }
    }
    return true
}


function palavras_sem_letras_proibidas(palavras){
    const letras_proibidas = input('Digite uma sequência, sem espaços, de letras proibidas: ')
    let contador = 0
    for(let palavra of palavras){
        if(avoids(palavra, letras_proibidas)){
            console.log(palavra)
            contador++
        } 
    }
    const percentual = (contador/palavras.length)*100
    console.log(`Existem ${contador} (${percentual.toFixed(3)}%) palavras que não contêm as letras proibidas (${letras_proibidas})`)
}



//EXERCÍCIO 9.4

function uses_only(palavra, serie_de_letras){
    let verification = 0

    for(let letra_p of palavra){

        for(let letra_s of serie_de_letras){ //verifica se a letra da palavra pertence a série de letras
            if(letra_p === letra_s){ // se pertencer, verification vai ficar maior que zero
                verification++
            }
        }

        if(verification === 0){ //se verification for igual a zero, significa que a letra da palavra não está dentro da letra da série
            return false //portanto encerra a função
        } // caso seja seja diferente de zero, zeramos o verification pra verificar a próxima letra da palavra
        verification = 0
    }  
    //se não tiver retornado false em momento algum, a função vai retornar true
    return true
}
    

function verifica_se_contem_somente_a_serie_de_letras(palavras){

    const serie_de_letras = input('Digite uma série de letras para fazer a verificação: ')
    let contador = 0

    for(let palavra of palavras) {

        if(uses_only(palavra, serie_de_letras)){
            console.log(palavra)
            contador++
        }
    }

    const percentual = (contador/palavras.length)*100
    console.log(`Existem ${contador} (${percentual.toFixed(3)}%) palavra(s) que contêm apenas letras da série: (${serie_de_letras}, em sua composição)`)
}


//EXERCÍCIO 9.5





// Carregar o código
function loadfile(){
    try{
        const data = fs.readFileSync('palavras.txt', 'utf-8')
        return data
    } catch (error){
        console.error(error)
    }
}

main()