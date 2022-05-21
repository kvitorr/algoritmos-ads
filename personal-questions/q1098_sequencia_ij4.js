


function main(){
   
    for(let i = 0; i <= 2; i = i + 0.2){

        for(let j = 1 + i; j <= i + 3; j++){
    

            if(i === 0 || i === 1){
                console.log(`I=${i} J=${j}`)
            } else if (i === 1.9999999999999998){
                console.log(`I=${2} J=${j}`)
            } else {
                console.log(`I=${i.toFixed(1)} J=${j.toFixed(1)}`)
            }
        }
    }
    
    
} main()