//Leia uma data no formato DD/MM/AAAA e escreva o mês por extenso (DD de mês de AAAA).

import prompt from 'prompt-sync'
const input = prompt()


function main(){

    const [dia, mes, ano] = input('DD/MM/AAAA: ').split('/')


    const mes_extenso = mes_por_extenso(mes)


    console.log(`${dia} de ${mes_extenso} de ${ano}`)

} 

function mes_por_extenso(mes){

    const index_vetor = mes - 1

    const vetor_meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

    const mes_extenso = vetor_meses[index_vetor]

    return mes_extenso

}


main()