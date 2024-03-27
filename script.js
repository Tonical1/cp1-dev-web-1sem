//Autenticando conta
let usuario = prompt("Digite seu usuário: ");
let senha = prompt("Digite sua senha: ");
if (usuario == "admin" && senha == "1234" ){
    console.log("Login realizado com sucesso!")
}
else{
    console.log("Falha de autenticação.")
}
