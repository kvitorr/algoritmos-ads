import fs from 'fs'
const lines = fs.readFileSync('./input.txt', 'utf-8').split('\r\n')

function main(){

    const [H, Z, L] = lines[0].split(' ').map(Number)
    const meio = irmaoDoMeio(H, Z, L)


    if(meio === H){
        console.log('huguinho')
    } else if (meio === Z) {
        console.log('zezinho')
    } else if (meio === L) {
        console.log('luisinho')
    }
} 


function irmaoDoMeio(n1, n2, n3){
    if(n1 > n2){

        if(n2 > n3){
            return n2
        } else if (n3 > n1){
            return n1
        } else {
            return n3
        }
    } else { // n2 > n1
        if(n1 > n3){
            return n1
        } else if (n3 > n2){
            return n2
        } else {
            return n3
        }
    }
} main()