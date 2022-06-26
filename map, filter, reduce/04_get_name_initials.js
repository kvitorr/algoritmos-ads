
//Creating Function usable Functions
function get_name_initial(string){
    const vetor = string.split(' ')
    let name_initial = ''

    for (let index = 0; index < vetor.length; index++) {
        
        name_initial += vetor[index][0]
    }

    return name_initial
}

const nome = 'Vitor Araujo dos Santos'

console.log(get_name_initial(nome))





//=================================================
//Using built-in functions
const initials = nome.split(' ').map(element => element[0]).join('')
console.log(initials)