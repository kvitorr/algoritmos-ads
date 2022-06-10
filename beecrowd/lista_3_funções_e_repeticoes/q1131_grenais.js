import fs from 'fs'
const lines = fs.readFileSync('./q1131_grenais.txt', 'utf-8').split("\n")

function main(){
    
    let golsInter = 0
    let golsGremio = 0
    let gols = 0

    let optionGrenal = 0
    let qtdGrenais = 1

    let inter = 0
    let gremio = 0
    let empate = 0

    while(true){

        //Entradas
        gols = lines.shift().split(' ').map(Number)
        golsInter = gols[0]
        golsGremio = gols[1]

        if(vencedor(golsInter, golsGremio)){
            inter++
        } else if (vencedor(golsGremio, golsInter)){
            gremio++
        } else {
            empate++
        }

        //Processamento
        console.log("Novo grenal (1-sim 2-nao)")
        optionGrenal = Number(lines.shift())

        if(optionGrenal === 2){
            break
        }
        qtdGrenais++

    }

    console.log(`${qtdGrenais} grenais`)
    console.log(`Inter:${inter}`)
    console.log(`Gremio:${gremio}`)
    console.log(`Empates:${empate}`)

    if(inter > gremio){
        console.log(`Inter venceu mais`)
    } else if (gremio > inter){
        console.log(`Gremio venceu mais`)
    }



} 

const vencedor = (n1, n2) => {return n1 > n2}

main()