import prompt from 'prompt-sync'
const input = prompt()



function main(){

    //Entradas e declaração de variáveis
    let nomeAltura = ["", ""]
    let maiorAltura 
    let menorAltura

    let nomePeso = ["", ""]
    let maiorPeso
    let menorPeso 

    let nome = input('Digite o nome da candidata: ')
    let altura = Number(input('Digite a altura da candidata: '))
    let peso = Number(input('Digite o peso da candidata: '))

    maiorAltura = altura
    menorAltura = altura

    maiorPeso = peso
    menorPeso = peso

    nomeAltura[0] = nome
    nomeAltura[1] = nome


    nomePeso[0] = nome
    nomePeso[1] = nome


    while(!(nome === "fim")){

        if(altura > maiorAltura){
            nomeAltura[0] = nome
            maiorAltura = altura
        } else if (altura < menorAltura) {
            nomeAltura[1] = nome
            menorAltura = altura
        }

        if(peso > maiorPeso){
            nomePeso[0] = nome
            maiorPeso = peso
        } else if (peso < menorPeso) {
            nomePeso[1] = nome
            menorPeso = peso
        }


        console.log('\n->Nova candidata')
        nome = input('\tDigite o nome da candidata: ')

        if(nome === "fim"){
            break
        }
        altura = Number(input('\tDigite a altura da candidata: '))
        peso = Number(input('\tDigite a peso da candidata: '))

    }

    //Saídas
    console.log('\n-> Candidata mais alta')
    console.log(`\tNome: ${nomeAltura[0]}`)
    console.log(`\tAltura: ${maiorAltura} m\n`)


    console.log('-> Candidata mais baixa')
    console.log(`\tNome: ${nomeAltura[1]}`)
    console.log(`\tAltura: ${menorAltura} m\n`)

    console.log('-> Candidata mais magra')
    console.log(`\tNome: ${nomePeso[1]}`)
    console.log(`\tPeso: ${menorPeso} kg(s)\n`)

    console.log('-> Candidata mais gorda')
    console.log(`\tNome: ${nomePeso[0]}`)
    console.log(`\tPeso: ${maiorPeso} kg(s)\n`)



} main()