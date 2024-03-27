//Cálculo de IMC
let peso = parseFloat(prompt("Digite seu peso em KG: "));
let altura = parseFloat(prompt("Digite sua altura em m: "));
let imc = parseFloat( peso/(altura**2) );

if(imc < 18.5){
    console.log(imc,":Abaixo do peso")
} 
else if (18.5 <= imc && imc <=24.9 ){
    console.log(imc,":Peso ideal")
}
else{
    console.log(imc,":Acima do peso")
}