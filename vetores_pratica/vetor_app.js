import { inicializar_vetor_numerico, show_vetor, resetar_vetor, mostrar_quantidade_de_elementos, mostrar_maior_menor_elementos_e_posicoes, mostrar_media_dos_elementos_vetor, mostrar_somatorio_dos_elementos_vetor, mostrar_elementos_positivos_e_quantidade, mostrar_elementos_negativos_e_quantidade, mapear_vetor, add_novos_elementos, remover_elementos_especificos, editar_elemento_vetor } from './vetor_funcionalidades.js'
import prompt from 'prompt-sync'
import { get_number, get_number_inside_range } from './utils.js'
import fs from 'fs'
const input = prompt()

function main(){

    menu()
    let option = get_number_inside_range(0, 12)
    let vetor, valor_padrao, qtd_de_elementos, elemento, indice, caminho_arquivo

    while (option !== 0) {
        console.clear()

        if (option === 1) {
            vetor = inicializar_vetor_numerico()
        } else if (option === 2) {
            show_vetor(vetor)
        } else if (option === 3) {
            valor_padrao = Number(input('Digite o valor padrão: '))
            vetor = resetar_vetor(vetor, valor_padrao)
        } else if (option === 4) {
            mostrar_quantidade_de_elementos(vetor)
        } else if (option === 5) {
            mostrar_maior_menor_elementos_e_posicoes(vetor)
        } else if (option === 6) {
            mostrar_media_dos_elementos_vetor(vetor)
        } else if (option === 7) {
            mostrar_somatorio_dos_elementos_vetor(vetor)
        } else if (option === 8) {
            mostrar_elementos_positivos_e_quantidade(vetor)
        } else if (option === 9) {
            mostrar_elementos_negativos_e_quantidade(vetor)
        } else if (option === 10) {
            mapear_vetor(vetor)
        } else if (option === 11) {
            qtd_de_elementos = get_number('Adicionar quantos elementos ao vetor? ')
            vetor = add_novos_elementos(vetor, qtd_de_elementos)
        } else if (option === 12) {
            console.log(`Vetor: [${vetor.join(', ')}]`)
            elemento = get_number('Remover qual elemento? ')
            vetor = remover_elementos_especificos(vetor, elemento)
            console.log(`Novo vetor: [${vetor.join(', ')}]`)
        } else if (option === 13){
            console.log(`Vetor: [${vetor.join(', ')}]`)
            indice = get_number('Digite a posição do elemento que vc deseja substituir: ')
            editar_elemento_vetor(vetor, indice)
            console.log(`Novo vetor: [${vetor.join(', ')}]`)
        } else if (option === 14){
            caminho_arquivo = input('Escreva o caminho do arquivo: (./arquivo.txt): ')
            fs.writeFileSync(caminho_arquivo, vetor.join(' ') + "\n", {flag: 'a'})
        }

        input('Aperte ENTER para continuar... ')
        console.clear()
        menu()


        option = Number(input('Selecione uma opção: '))
        console.clear()
        if(option === 0) {
            input('Antes de sair, salve as informações...\n<press ENTER to continue>')
            caminho_arquivo = input('Escreva o caminho do arquivo: (./arquivo.txt): ')
            fs.writeFileSync(caminho_arquivo, vetor.join(' ') + "\n", {flag: 'a'})
        }
    }
    console.clear()
}

function menu() {
    console.clear()
    let menu = '--------- Seja bem-vindo ao vetor_app ---------'
    menu += '\nSelecione uma das opções abaixo: \n'
    menu += '\t1. Inicializar vetor numérico\n'
    menu += '\t2. Mostrar vetor\n'
    menu += '\t3. Resetar vetor com valor padrão\n'
    menu += '\t4. Mostrar quantidade de elementos\n'
    menu += '\t5. Mostrar maior e menor elementos e suas posições\n'
    menu += '\t6. Media dos elementos do vetor\n'
    menu += '\t7. Somatório dos elementos\n'
    menu += '\t8. Mostrar valores positivos e quantidade\n'
    menu += '\t9. Mostrar valores negativos e quantidade\n'
    menu += '\t10. Atualizar todos os valores por uma regra\n'
    menu += '\t11. Adicionar elementos ao vetor\n'
    menu += '\t12. Remover elemento específico do vetor\n'
    menu += '\t13. Editar elemento por índice\n'
    menu += '\t14. Salvar elementos em arquivo\n'
    menu += '\n0. Encerrar'

    console.log(menu)
}

main()