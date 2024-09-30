/*
Ex: comst lista = ["arroz", "feijão", "macarrão", "leite"];

A lista[0] (lista na posição 0) vai conter o valor "arroz"
A lista[1] (lista na posição 1) vai conter o valor "feijão"
*/

/*
var item1 = "arroz";
var item2 = "feijão";
var item3 = "macarrão";
var item4 = "leite";
*/

/*
const lista = [
    "arroz", 
    "feijão", 
    "macarrão", 
    "leite"
];
let x = lista[3];
lista[0] = "café";
alert(lista[0]);

console.log(lista);
*/

/*
const pessoa = ["Filipe", "Tartaglia", 19]; //Array
alert(pessoa.length); //3

alert(pessoa[pessoa.length -1]);

pessoa.push("Brasileiro");
console.log(pessoa);
*/

// Métodos Arrays

const pessoa = ["Filipe", "Tartaglia", 19, "Desenvolvedor"];

/*
pessoa.splice(1,0,"Item adicionado 1", "item adicionado 2");
pessoa.pop()
pessoa.shift();
*/

/*
const lista1 = ["Arroz", "feijão", "leite", "macarrão"];
const lista2 = ["Suco", "refrigerante", "carne"];

const superLista = lista1.concat(lista2);

document.getElementById("teste").innerHTML = superLista.join(", ");
*/

const jogadores = ["Biro Biro", "Ribamar", "Pelé", "Maradona", "Neymar", "Messi", "Cristiano Ronaldo", "Vampeta", "Coutinho"];
const craques = jogadores.slice(2, 6);

const jogOrdem = jogadores.sort();

document.getElementById("teste").innerHTML = jogOrdem;