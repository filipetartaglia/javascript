// Number
var numero = 5;
console.log(typeof numero);
var float = 5.32;
console.log(typeof float);

// String
var nome = 'Filipe';
console.log(typeof nome);
console.log('Seu nome é ' + nome + '?');

// Boolean
var verdadeiro = true; 
console.log(verdadeiro);
console.log(typeof verdadeiro);
var falso = false;
console.log(falso);
console.log(typeof falso);

// Undefined e Null
var nome = null;
var sobrenome = undefined;
console.log(nome);
console.log(sobrenome);
nome = 'Filipe';
sobrenome = 'Gonçalves';
console.log(nome);
console.log(sobrenome);

// Objetos 
var obj = {
    nome: "Filipe",
    idade: 18,
    profissao: "Barista",
};
console.log(obj);
console.log(typeof obj);
console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissao);
console.log('O meu nome é ' + obj.nome);

obj.nome = 'Pedro';
console.log(obj.nome);

obj.graduacao = true;
console.log(obj);

// Arrays
var arr  = [5, 'Filipe', true, {teste: 1, teste: 2}]; // objeto => {}
console.log(arr);

var arr2 = [2,3,4,5,6];
console.log(arr2);

console.log(arr[1]);
console.log(arr[0]);

arr[4] = 10;

arr[0] = "Teste";

console.log(arr);

console.log(typeof arr);