// If
var idade = 24;
var idadeMinima = 18;

console.log("Antes do if");

if(idade >= idadeMinima) {
    console.log('Pode tirar carteira de habilitação');   
}

if(idade <= idadeMinima) {
    console.log('Precisa esperar alguns anos ainda');
}
console.log('Depois do if');

// Operadores de comparação
var idade = 18;

if(idade >= 18) {
    console.log('Pode tirar a carteira de habilitação');
}

if(idade <= 17) {
    console.log('Não pode tirar a carteira de habilitação')
}

var nome = "Filipe";

if(nome == 'Filipe') {
    console.log('O seu nome é Filipe');
}

if(nome != 'Filipe') {
    console.log('O seu nome não é Filipe');
}