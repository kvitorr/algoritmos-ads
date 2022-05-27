import prompt from 'prompt-sync'
const input = prompt()


function main(){

    const distance = 600 //km
    const fullTank = 50 //litros

    let travelledDistance = Number(input('Distancia percorrida: '))
    let litersConsumed = Number(input('Litros consumidos: '))

    let totalLiters = 0
    let totalDistance = 0

    totalLiters += litersConsumed
    totalDistance += travelledDistance

    while((distance > totalDistance) && (fullTank > totalLiters)){

        travelledDistance = Number(input('Distancia percorrida: '))
        litersConsumed = Number(input('Litros consumidos: '))

        totalLiters += litersConsumed
        totalDistance += travelledDistance

    }

    if(distance <= totalDistance){
        console.log(`\tO carro chegou ao seu destino. Distancia percorrida: ${totalDistance}. Litros consumidos: ${litersConsumed}`)

    } else if(fullTank <= totalLiters ){
        console.log(`\tO carro parou antes de chegar por falta de combustível. Distancia que falta: ${distance - totalDistance} km(s).`)
    }

    const fuelEfficiency = (totalDistance/totalLiters).toFixed(2)
    console.log(`\tConsumo em km/l: ${fuelEfficiency}`)

} main()