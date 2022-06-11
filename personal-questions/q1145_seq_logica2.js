import fs from 'fs'
const lines = fs.readFileSync('q1145_seq_logica2.txt', 'utf-8').split('\r\n')

function main(){

    const [variacao, limite] = lines.shift().split(' ').map(Number)


    let result = ''
    let last = 0

    for(let i = 1; last < limite; i += variacao){

        result = '' 

        for(let j = i; j < (i + variacao); j++){
            
            last = j;

            if(j === (i + variacao - 1)){

                if(j <= limite) result += j

            } 
            else {

                if(j <= limite) result += j + " "
           
        }

        }
        console.log(result)

    } 

}


function get_sequencia(variacao, limite){

    let saida = ''
    let second = 0
    let third = 1

    for(let i = 1; (i + 2) <= limite; i += variacao){

        second = i + 1
        third = i + 2

        saida = i + " " + second + " " + third
        console.log(saida)


        saida = ''

    }


}

main()