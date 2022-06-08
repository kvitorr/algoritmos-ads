import { input } from "./utility.js";
import { vector_inverter, new_vector_fill_string} from "./vetor_functions.js";


function main(){

    const n = Number(input('N: '))

    const vetor = new_vector_fill_string(n)

    const vetor_invertido = vector_inverter(vetor)

    console.log(`====================\nVetor: [${vetor.join(', ')}]\nVetor invertido: [${vetor_invertido.join(', ')}]`)

} main()