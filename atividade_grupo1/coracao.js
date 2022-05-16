import prompt from 'prompt-sync'
const input = prompt()


function main(){

    const idadeAtual = Number(input('Digite sua idade: '))
    const fcAtual = Number(input('Digite a frequência cardíaca atual: '))


    const fcMaxima = 220 - idadeAtual
    const intensidadeFCAtual = (fcAtual/fcMaxima) * fcMaxima

    const zona5 = fcMaxima * 0.9
    const zona4 = fcMaxima * 0.8
    const zona3 = fcMaxima * 0.7
    const zona2 = fcMaxima * 0.6
    const zona1 = fcMaxima * 0.5

    if(intensidadeFCAtual >= zona5){
        console.log('\nZona: Atividade Moderada\n')
    } else if (intensidadeFCAtual >= zona4){
        console.log('\nZona: Anaeróbica\n')
    } else if (intensidadeFCAtual >= zona3){
        console.log('\nZona: Aeróbica\n')
    } else if (intensidadeFCAtual >= zona2){
        console.log('\nZona: Controle de Peso\n')
    } else if (intensidadeFCAtual >= zona1) {
        console.log('\nZona: Atividade Moderada\n')
    }

    console.log('------ Limites de Frequência Cardíaca ------')

    console.log(`Atividade Moderada      [${zona1} a ${zona2})`)
    console.log(`Controle de Peso        [${zona2} a ${zona3})`)
    console.log(`Aeróbica                [${zona3} a ${zona4})`)
    console.log(`Anaeróbica              [${zona4} a ${zona5})`)
    console.log(`Esforço Máximo          [${zona5} a ${fcMaxima})`)

} main()
