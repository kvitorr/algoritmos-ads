import fs from 'fs'

const input = fs.readFileSync('./q1114_senha_fixa.txt', 'utf-8')
const lines = input.split('\r\n')


function main(){

    while(verifica_senha(lines)){
               
        console.log('Senha Invalida')
    }
    console.log('Acesso Permitido')
} 

function verifica_senha(lines){
    let senha = Number(lines.shift())
    if(senha === 2002){
        return false
    } else {
        return true
    }
} main()