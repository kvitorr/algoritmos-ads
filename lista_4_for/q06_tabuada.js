

function main(){

    for(let numero = 0; numero <= 10; numero += 1){
        tabuada(numero)
    }

} 

function tabuada(numero){
    
    let resultado 

    console.log(`\n====== Tabuada do ${numero} ======`)
    
    for(let i = 0; i <= 10; i += 1){
        resultado = numero * i
        console.log(`${numero} x ${i} = ${resultado}`)    
    }


}



main()