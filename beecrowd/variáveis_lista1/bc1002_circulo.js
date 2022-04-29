import {input} from "./io_utils.js"


function main(){
    
        //Entrada do Raio
        const r = Number(input('Digite o valor do raio: '))

        //Definindo o número pi
        const n = 3.14159

        //cálculo da área
        const area = n * (r**2)

        //Saída
        console.log(`A=${area.toFixed(4)}`)

}

main()