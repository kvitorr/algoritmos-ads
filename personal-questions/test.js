import fs from 'fs'
const numbers = fs.readFileSync('./input.txt', 'utf-8').split('\n')

numbers.sort((a, b) =>{ if(a > b) return -1; if(a < b) return 1; return 0; });

var a = numbers.shift(); var b = numbers.shift(); var c = numbers.shift();

function verificaTriangulo(a, b, c){

if(a >= (b+c)){
    console.log("Não forma um triângulo.");
}else if((a**2) == (b**2 + c**2)){
    console.log("TRIANGULO RETANGULO.");
}else if((a**2) > (b**2 + c**2)){
    console.log("TRIANGULO OBTUSANGULO");
    if(a == b && b == c){
        console.log("TRIANGULO EQUILATERO");
    }else if(a == b || a == c || b == c){
        console.log("TRIANGULO ISOSCELES");
    }
}else if((a**2) < (b**2 + c**2)){
    console.log("TRIANGULO ACUTANGULO");
    if(a == b && b == c){
        console.log("TRIANGULO EQUILATERO");
    }else if(a == b || a == c || b == c){
        console.log("TRIANGULO ISOSCELES");
    }
}
}

verificaTriangulo(a, b, c);