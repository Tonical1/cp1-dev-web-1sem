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