let tabuada;
let resultado
console.log("Digite um numero")

process.stdin.on("data", function (data){
 tabuada = Number (data.toString().trim())

 for (let i=1; i<=10;i++){

resultado= i*tabuada
console.log(tabuada + " x "+ i+" = " +resultado)

 }



})