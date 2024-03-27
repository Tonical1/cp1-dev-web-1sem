// Resolvendo questões da CP1 - web dev
// Declarando variavel undefined / vazio / com valor

let indefinida;
console.log(indefinida)

let vazia = null;
console.log(vazia)

let comvalor = "Com valor!";
console.log(comvalor)

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

//Catalogo idade
let idade2 = parseInt(prompt("digite a idade a ser catalogada: "));
if(idade2 !=0){
    if(idade2<=12){
        console.log(idade2,"Trata-se de uma criança!")
    }
    else if (idade2>=13 && idade2 <=18){
        console.log(idade2,"Trata-se de um adolescente!")
    }
    else if(idade2>=19 && idade2<=60){
        console.log(idade2,"Trata-se de um adulto!")
    }
    else{
        console.log(idade2,"Trata-se de um idoso!")
    }
}
else{
    console.log("Insira uma idade válida! (<0)")
}

//Autenticando conta
let usuario = prompt("Digite seu usuário: ");
let senha = prompt("Digite sua senha: ");
if (usuario == "admin" && senha == "1234" ){
    console.log("Login realizado com sucesso!")
}
else{
    console.log("Falha de autenticação.")
}

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

//Imprimindo na tela + fundo do site
let nome = prompt("Digite seu nome: ")
let idade3 = prompt("Digite sua idade: ")
let curso = prompt("Digite seu curso")
let ano = prompt("Digite seu ano da turma: ")
document.write(".",nome,"<br>")
document.write(".",idade3," anos <br>")
document.write(".",curso,"<br>")
document.write(".",ano,"<br>")

// Buscador de termos
let texto = "Tecnologia é um produto da ciência e da engenharia que envolve um conjunto de instrumentos, métodos e técnicas que visam a resolução de problemas";
console.log(texto.indexOf("em"))
console.log(texto.lastIndexOf("ia"))
console.log(texto.slice(27,34))
console.log(texto.slice(92,98))

//string -> float -> dizer variavel
let variavel = prompt("Digite a string: ");
variavel.toString()
let variavelfloat = parseFloat(variavel);
let verificando = typeof(variavelfloat);
console.log(verificando)