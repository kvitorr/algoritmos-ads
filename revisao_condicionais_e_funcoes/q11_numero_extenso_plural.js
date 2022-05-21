import prompt from 'prompt-sync'
const input = prompt()


function main(){

    const numero = input('Digite um número inteiro menor que 1000: ')

    const unidade = Number(numero[numero.length - 1])
    const dezena = Number(numero[numero.length - 2])
    const centena = Number(numero[numero.length - 3])

    let cent
    let dezen 
    let unid 

        if(centena === 1){
            cent = `${centena} centena`
        } else if (centena > 1 || centena === 0){
            cent = `${centena} centenas`
        } else {
            cent = "invalido"
        }

        if(dezena === 1){
            dezen = `${dezena} dezena`
        } else if (dezena > 1 || dezena === 0) {
            dezen = `${dezena} dezenas`
        } else {
            dezen = "invalido"
        }

        if(unidade === 1){
            unid = `${unidade} unidade`
        } else if(unidade > 1 || unidade === 0) {
            unid = `${unidade} unidades`
        }


if(cent === "invalido" && dezen === "invalido"){
    console.log(unid)
} else if (cent === "invalido"){
    console.log(`${dezen} e ${unid}`)
} else if (cent !== "invalido" && dezen !== "invalido"){
    console.log(`${cent}, ${dezen} e ${unid}`)
}

} main()