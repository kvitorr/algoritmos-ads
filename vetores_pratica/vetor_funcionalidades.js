import { get_number, get_number_inside_range, get_positive_number, load_vector } from "./utils.js";
import { filtra_elementos_positivos, get_vetor_numeros_aleatorios, get_vetor_numeros_definidos, maior_elemento_vetor, media_elementos_vetor, menor_elemento_vetor, somatorio_elementos_vetor, filtra_elementos_negativos,             get_elementos_multiplicados, get_elementos_divididos, get_elementos_elevado_a_potencia, change_negatives_elements, insertion_sort, embaralhar_array} from './vetor_utils.js'

import prompt from 'prompt-sync'
const input = prompt()



export function inicializar_vetor_numerico() {

    let vetor

    console.log('OPÇÃO: Inicializar um vetor: ')
    console.log('\t1. Vetor com dados automáticos')
    console.log('\t2. Vetor com valores escolhidos')
    console.log('\t3. Preencher vetor com arquivo\n')

    const sub_option = get_number_inside_range(1, 3)
    console.clear()

    if (sub_option === 1 || sub_option === 2) {

        const tamanho = get_positive_number('Digite o tamanho do vetor: ')
        const [limite_inferior, limite_superior] = input('Digite o limite inferior e o limite superior do vetor, separados por espaço: ').split(' ').map(Number)


        console.clear()
        console.log(`Tamanho do vetor: ${tamanho}. Limites: [${limite_inferior}, ${limite_superior}]\n`)

        if (sub_option === 1) {

            vetor = get_vetor_numeros_aleatorios(tamanho, limite_inferior, limite_superior)

            return vetor

        } else {
            vetor = get_vetor_numeros_definidos(tamanho, limite_inferior, limite_superior)

            return vetor
        }


    } else if (sub_option === 3) {
        console.log('OPÇÃO: Preencher vetor com arquivo: ')
        const local_arquivo = input('Digite o local do arquivo (./valores.txt): ')
        const caractere_split = input('Digite o caractere que está separando os valores no arquivo: ')

        vetor = load_vector(local_arquivo, caractere_split)
        return vetor
    }
}

export function show_vetor(vetor) {
    console.log(vetor)
}


export function resetar_vetor(vetor, valor_padrao) {

    for (let i = 0; i < vetor.length; i++) {
        vetor[i] = valor_padrao
    }
    return vetor
}

export function mostrar_quantidade_de_elementos(vetor) {
    console.log(`Quantidade de elementos do vetor: ${vetor.length}\n`)
}

export function mostrar_maior_menor_elementos_e_posicoes(vetor) {

    const [i_menor, menor_elemento] = menor_elemento_vetor(vetor)

    const [i_maior, maior_elemento] = maior_elemento_vetor(vetor)

    console.log('Index iniciando do 0.')
    console.log(`\tMaior elemento: Vetor[${i_maior}] = ${maior_elemento}`)
    console.log(`\tMenor elemento: Vetor[${i_menor}] = ${menor_elemento}`)
}

export function mostrar_media_dos_elementos_vetor(vetor) {

    const media = media_elementos_vetor(vetor)

    console.log('Media dos elementos do vetor:')
    console.log(vetor)
    console.log(`Media: ${media}`)
}

export function mostrar_somatorio_dos_elementos_vetor(vetor) {

    const soma = somatorio_elementos_vetor(vetor)

    console.log('Somatório dos elementos do vetor:')
    console.log(vetor)
    console.log(`Somatório: ${soma}`)
}

export function mostrar_elementos_positivos_e_quantidade(vetor) {

    const [vetor_positivos, qtd] = filtra_elementos_positivos(vetor)

    console.log('Vetor original: ')
    console.log(vetor)
    console.log('\nElementos positivos do vetor: ')
    console.log(vetor_positivos)
    console.log(`Quantidade de elementos: ${qtd}`)
}

export function mostrar_elementos_negativos_e_quantidade(vetor) {

    const [vetor_negativos, qtd] = filtra_elementos_negativos(vetor)

    console.log('Vetor original: ')
    console.log(vetor)
    console.log('\nElementos negativos do vetor: ')
    console.log(vetor_negativos)
    console.log(`Quantidade de elementos: ${qtd}`)
}

export function mapear_vetor(vetor){
    console.log('Opções de mapeamento: ')
    console.log('\t1. Multiplicar por um valor')
    console.log('\t2. Elevar a um valor')
    console.log('\t3. Dividir por um valor')
    console.log('\t4. Substituir valores negativos por um número aleatório de uma faixa')
    console.log('\t5. Ordenar valores')
    console.log('\t6. Embaralhar valores')


    const option = get_number_inside_range(1, 6)

    if(option === 1 || option === 2 || option === 3){
        const valor = get_number('Digite o valor: ')

        if(option === 1){
            console.log('Vetor original: ')
            console.log(vetor)

            get_elementos_multiplicados(vetor, valor)

            console.log(`Vetor multiplicado por ${valor}`)
            console.log(vetor)

        } else if (option === 2){
            console.log('Vetor original: ')
            console.log(vetor)

            get_elementos_elevado_a_potencia(vetor, valor)

            console.log(`Vetor elevado a ${valor}`)
            console.log(vetor)

        } else if (option === 3){
            console.log('Vetor original: ')
            console.log(vetor)

            get_elementos_divididos(vetor, valor)

            console.log(`Vetor dividido por ${valor}`)
            console.log(vetor)
        }
    } else if (option === 4){
        console.log('Vetor original: ')
        console.log(vetor)

        console.log('Digite o limite inferior e o limite superior da faixa de valores')
        const [limite_inferior, limite_superior] = input('separados por espaço: ').split(' ').map(Number)

        change_negatives_elements(vetor, limite_inferior, limite_superior)

        console.log(`Elementos negativos trocados por valores na faixa [${limite_inferior}, ${limite_superior}]`)
        console.log(vetor)
    } else if (option === 5){
        console.log(`Vetor Original: [${vetor.join(', ')}]`)
        insertion_sort(vetor)
        console.log(`Vetor Ordenado: [${vetor.join(', ')}]`)
    } else if(option === 6){
        console.log(`Vetor Original: [${vetor.join(', ')}]`)
        embaralhar_array(vetor)
        console.log(`Vetor Embaralhado: [${vetor.join(', ')}]`)
    }
}

export function add_novos_elementos(vetor, qtd_de_elementos){

    const new_vector = new Array(vetor.length + 1)
    const tamanho = vetor.length + qtd_de_elementos

    for (let i = 0; i < tamanho; i++) {
        if(i < (tamanho - qtd_de_elementos)) new_vector[i] = vetor[i]
        else new_vector[i] = get_number('Novo elemento: ')
    }

    return new_vector
}

export function remover_elementos_especificos(vetor, elemento){

    const novo_tamanho = vetor.length - get_qtd_de_elementos_especificos(vetor, elemento)
    const vetor2 = new Array (novo_tamanho)
    let contador = 0

    for (let i = 0; i < vetor.length; i++) {
        if(vetor[i] !== elemento) vetor2[contador] = vetor[i]; contador++;
        
    }
    return vetor2
}

function get_qtd_de_elementos_especificos(vetor, elemento){
    let contador = 0

    for (let i = 0; i < vetor.length; i++) {
        if(vetor[i] === elemento){
            contador++
        }
    }
    return contador
}

export function editar_elemento_vetor(vetor, indice){
    
    for (let i = 0; i < vetor.length; i++) {
        if(i === (indice - 1)){
            vetor[i] = get_number('Digite o novo elemento: ')
        }
    }
}