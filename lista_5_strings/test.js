function substitui_numero_por_extenso(caractere){

    const numeros_por_extenso = ["zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove"]

    const index = Number(caractere)

    const numero_extenso = numeros_por_extenso[index]
    
    return numero_extenso

}


const a = "7"

const b = substitui_numero_por_extenso(a)

console.log(b)