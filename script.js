//Cálculo de aprovação
 
let nota1 = parseFloat(prompt("Digite a primeira nota da média: "));
let nota2 = parseFloat(prompt("Digite a segunda nota da média: "));
let nota3 = parseFloat(prompt("Digite a terceira nota da média: "));
let nota4 = parseFloat(prompt("Digite a quarta nota da média: "));
let nota5 = parseFloat(prompt("Digite a quinta nota da média: "));
let nota6 = parseFloat(prompt("Digite a sexta nota da média: "));
let nota7 = parseFloat(prompt("Digite a sétima nota da média: "));
let media = parseFloat((nota1+nota2+nota3+nota4+nota5+nota6+nota7)/7)
if(media>=6){
    console.log(media,"Aprovado!")
}
else{
    console.log(media,"Reprovado.")
}