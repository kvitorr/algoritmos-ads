import prompt from 'prompt-sync'
const input = prompt()


function main(){

    const [nota1, nota2] = input('Digite duas notas separadas por espaço: ').split(' ').map(Number)

    const media = (nota1 + nota2)/2
    let conceito = ""
    let status = ""

    if(media >= 9 && media <=10){
        conceito = "A"
    } else if (media >= 7.5 && media < 9){
        conceito = "B"
    } else if (media >= 6 && media < 7.5){
        conceito = "C"
    } else if (media >= 4 && media < 6){
        conceito = "D"
    } else if (media >= 0 && media < 4){
        conceito = "E"
    }

    if (conceito === "D" || conceito === "E"){
        status = "REPROVADO"
    } else if (conceito === "A" || conceito === "B" || conceito === "C") {
        status = "APROVADO"
    }

    console.log(`\tNota 1: ${nota1}; Nota 2: ${nota2}`)
    console.log(`\tMédia: ${media}`)
    console.log(`\tConceito: ${conceito}`)
    console.log(`\t${status}`)




} main()