import prompt from 'prompt-sync'
const input = prompt()

function main(){

    var dataMilissegundos;
    let data_1 = input("digite uma data: (dd/mm/aaaa/hh/mm/ss)").split('/').map(Number)
    let data_2 = input("digite outra data: ").split('/').map(Number)

    const data1 = new Date(data_1).getMilliseconds
    const data2 = new Date(data_2).getMilliseconds
    console.log(data1);

    if(data1 > data2){
        dataMilissegundos = data1 - data2
    }else{
        dataMilissegundos = data2 - data1
    }

    var resultado = new Date(dataMilissegundos)

    console.log("data: "+resultado)


}
main();