//Verifique a validade de uma senha fornecida pelo usuário. A senha é 1234. O algoritmo deve escrever uma mensagem de permissão de acesso ou não

import {input} from "./io_utils.js";

function main(){

    //Entradas
    const senha = Number(input('Digite sua senha de quatro dígitos númericos: '))

    //Processamento e saída
    if(validade_senha(senha)){
        console.log('\tO acesso foi permitido :)')
    } else {
        console.log('\tO acesso foi negado :(')
    }

} 

const validade_senha = (senha) => {return senha === 1234}

main()