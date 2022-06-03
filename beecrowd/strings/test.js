function all_substrings (string){

    let substrings = ""

    let voltas = 0


    for(let i = 1; i <= string.length; i++){

        for(let j = i; j <= string.length; j++){

           if(voltas === string.length) substrings += fatia_string(string, i, j)
           else substrings += fatia_string(string, i, j) + "1"



        }

    }

    const vetor_substrings = substrings.split('1')

    return vetor_substrings

}

function fatia_string(string, inicio, fim){
    const index_inicio = inicio - 1
    const index_fim = fim - 1
    let fatia = ''
    let caractere

    for(let index_caractere = index_inicio; index_caractere <= index_fim; index_caractere += 1){

        caractere = string[index_caractere]
        
        fatia += caractere

    }

    return fatia

}


const a = "vi tor"

const b = all_substrings(a)

console.log(b)