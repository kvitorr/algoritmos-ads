import fs from 'fs'
const lines = fs.readFileSync('./input/q1179_preenchimento_de_vetor_iv.txt', 'utf-8').split('\r\n')

function main(){

    
    let elemento = 0
    let index_par = 0
    let index_impar = 0

    const par = new Array(5)
    const impar = new Array(5)

    for (let index = 0; index < 15; index++) {

        elemento = Number(lines[index])
        
        if(eh_par(elemento)){
            par[index_par] = elemento
            index_par++
        } else {
            impar[index_impar] = elemento
            index_impar++
        }

        if(index_par === 5){
            printa_vetor(par, "par")
            index_par = 0
        }

        if(index_impar === 5){
            printa_vetor(impar, "impar")
            index_impar = 0
        }

    }

    for (let index = 0; index < index_impar; index++) {
        console.log(`impar[${index}] = ${impar[index]}`)        
    }

    for (let index = 0; index < index_par; index++) {
        console.log(`par[${index}] = ${par[index]}`)        
    }

}

const eh_par = (numero) => {return (numero % 2) === 0}

function printa_vetor(vetor, string){
    for (let index = 0; index < vetor.length; index++) {
        console.log(`${string}[${index}] = ${vetor[index]}`)        
    }
}


main()