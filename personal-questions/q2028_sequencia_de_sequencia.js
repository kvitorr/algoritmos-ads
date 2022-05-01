
import { count } from 'console';
import fs from 'fs'


var input = fs.readFileSync('./q2028_sequencia_de_sequencia.txt', 'utf8');
var lines = input.split('\n');


function main(){
    let n = 0
    let cont_num = 0
    let cont_case = 0
    let sequencia = ""

    while(lines.length > 0){

        let entrada 
        entrada = lines.shift()

        if(n == 0) {
            sequencia += "0"
        } else {
            for(let k = 0; k < entrada; k++){
                sequencia += " " + String(n)
            }
        }

        if(n == 0){
            cont_case = n
            cont_num += n
            console.log(`Caso ${n + 1}: ${cont_num + 1} numero\n${sequencia}\n`)

        } else {
            cont_case = n
            cont_num += n
            console.log(`Caso ${n + 1}: ${cont_num + 1} numeros\n${sequencia}\n`)

        }
    n++
    }
    

} main()