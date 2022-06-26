import fs from 'fs'
const lines = fs.readFileSync('./input.txt', 'utf-8').split('\r\n')

function main(){

    const qtd_de_bolinhas = Number(lines[0])

    const qtd_de_galhos = Number(lines[1])

    let qtd_de_bolinhas_suportadas = get_bolinhas_suportadas(qtd_de_galhos)

    const qtd_de_bolinhas_necessárias = qtd_de_bolinhas_suportadas - qtd_de_bolinhas

    if(qtd_de_bolinhas_necessárias <= 0){
        console.log('Amelia tem todas bolinhas!')
    } else {
        console.log(`Faltam ${qtd_de_bolinhas_necessárias} bolinha(s)`)
    }

} 

function get_bolinhas_suportadas(qtd_de_galhos){
    if(is_even(qtd_de_galhos)) return Math.floor(qtd_de_galhos/2)
    else return qtd_de_galhos/2
}

const is_even = x => !((x % 2)=== 0)


main()