//Você deve fazer um programa que leia um valor qualquer e apresente uma mensagem dizendo em qual dos seguintes intervalos ([0,25], (25,50], (50,75], (75,100]) este valor se encontra. Obviamente se o valor não estiver em nenhum destes intervalos, deverá ser impressa a mensagem “Fora de intervalo”.

//O símbolo ( representa "maior que". Por exemplo: [0,25]  indica valores entre 0 e 25.0000, inclusive eles. (25,50] indica valores maiores que 25 Ex: 25.00001 até o valor 50.0000000

import fs from 'fs'

var input = fs.readFileSync('./inputs/q1037_intervalo.txt', 'utf8');
var lines = input.split('\n');

function main(){

    //Entradas
    const valor = lines[0].split(' ').map(Number)

    //Processamento
    if(valor >= 0 && valor <= 100){
        const intervalo = verifica_intervalo(valor)
        //Saídas
        console.log(`Intervalo ${intervalo}`)
    } else {
        //Saídas
        console.log('Fora de intervalo')
    }


} 

function verifica_intervalo(valor){
    if(valor >= 0 && valor <= 25){
        return "[0,25]"
    } else if (valor > 25 && valor <= 50){
        return "(25,50]"
    } else if (valor > 50 && valor <= 75){
        return "(50,75]"
    } else if (valor > 75 && valor <= 100){
        return "(75,100]"
    }
}

main()