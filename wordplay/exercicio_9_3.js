/*
//FOR OF
const numeros = [1, 2, 3, 4, 5]

for (let numero of numeros) {
    console.log(numero);
} //resultado: 1, 2, 3, 4, 5



//FOR IN
const numeros = [1, 2, 3, 4, 5]

for (let numero in numeros) {
    console.log(numero);
} //resultado: 0, 1, 2, 3, 4



const numeros = "arroz"

for (let numero in numeros) {
    console.log(numero);
} //resultado: 0, 1, 2, 3, 4
*/
/*
const numeros = "arroz"

for (let numero of numeros) {
    console.log(numero);
} //resultado: a r r o z
*/





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


function palavras_sem_letras_proibidas(palavras, letras_proibidas){

    let cont = 0

    for(let palavra of palavras){
        if(avoids(palavra, letras_proibidas)){
            console.log(palavra)
            cont++
        } 
    }

}

const letras_proibidas = "r"

const palavras = ["arroz", "feijao", "lucas", "vitor", "alemao"]


palavras_sem_letras_proibidas(palavras, letras_proibidas)



/*
function avoids(palavras, letras_proibidas){
    
       for (let letra2 of palavras){

       for (let letra1 of letras_proibidas) {

            if(letra1 === letra2){
                return false
            } else {
                console.log(palavras)
            }
       }
    }
}
*/