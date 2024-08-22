function primeiraFuncao() {
    console.log('Hello world das funções');
}

primeiraFuncao();

function dizerNome(nome) {
    console.log('O nome é ' + nome);
}

dizerNome('Filipe');
dizerNome('Matheus');
dizerNome('Pedro');

var nomeDoBancoDeDados = 'João';

dizerNome(nomeDoBancoDeDados);

function soma(a, b) {
    var soma = a + b;
    return soma;
}

var somaUm = soma(2, 5);
console.log(somaUm);
 
console.log(soma(4, 5));