import {get_number} from './utility.js'


function main(){

    const a0 = get_number("Ao")

    const limite = get_number('Limite')

    const raio = get_number('Raio')

    const pa_series = pa(a0, limite, raio)

    console.log(`\tPA: ${pa_series}`)

} 

function pa(a0, limite, raio){
    let saida = ""

    for(let i = a0; i < limite; i += raio){
        saida += String(i) + " "
    }

    return saida
}

main()