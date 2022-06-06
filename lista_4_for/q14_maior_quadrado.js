import { get_number } from "./utility.js";

function main(){

    const n = get_number('N: ')

    const maior_quadrado = maior_quadrado_menor_que_n(n)

    console.log(`\tMaior quadrado menor que ${n} é ${maior_quadrado}`)

} 

function maior_quadrado_menor_que_n(n){

    let maior_quadrado
    let quadrado

    for(let i = 0; i <= n; i += 1){

        quadrado = i * i

        if(quadrado <= n) maior_quadrado = quadrado
        else break;

    }

    return maior_quadrado
}


main()