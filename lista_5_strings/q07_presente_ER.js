//Leia um verbo regular terminado em ER e mostre sua conjugação no presente.


import prompt from 'prompt-sync'
const input = prompt()



function main(){

    const verbo = input('Verbo: ')

    conjugação(verbo)


} 

function conjugação(verbo){

    const tamanho_verbo = verbo.length - 2
    const radical = verbo.slice(0, tamanho_verbo)

    let conjugacao 
    conjugacao += '\n\tEu ' + radical + 'o\n'
    conjugacao += '\tTu ' + radical + 'es\n'
    conjugacao += '\tEle/Ela ' + radical + 'e\n'
    conjugacao += '\tNós ' + radical + 'emos\n'
    conjugacao += '\tVós ' + radical + 'eis\n'
    conjugacao += '\tEles/Elas ' + radical + 'em\n'
 
    console.log(conjugacao)

}




main()