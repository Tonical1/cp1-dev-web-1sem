// Operadores: "!=" (diferente de), "==" (igual à) e ">=" (maior igual que) exemplificados.
// 

let idade = parseInt(prompt("Insira uma idade: ") ); 
if(idade != 0){
    console.log("Inseriu uma idade válida!")
}
else{
    console.log("idade inválida!")
}

//exemplo 2
if(idade >= 18){
    console.log("Atingiu a maioridade")
}
else{
    console.log("Menor de idade")
}
//exemplo 3
if(idade == 18){
    console.log("Acabou de completar a maioridade (18 anos)")
}
else{
    console.log("Não possui exatamente 18 anos")
}