import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const populationA = 200.000
    const growthRateA = 0.035
    let totalPopulationA = populationA


    const populationB = 800.000
    const growthRateB = 0.0135
    let totalPopulationB = populationB

    let years = 0

    while(totalPopulationA < totalPopulationB){

        totalPopulationA += totalPopulationA * growthRateA
        totalPopulationB += totalPopulationB * growthRateB

        years++

    }
    
    console.log(`Levarão ${years} anos para que a população da cidade A ultrapasse a população da cidade B`)


} main()