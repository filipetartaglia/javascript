// Operador AND / &&
var idade = 16;
var nome = 'Filipe';

if(nome == 'Filipe' && idade == 16) {
    console.log('O filipe pode entrar na aula de natação');
} else {
    console.log('Este não é o filipe');
}

if(1 == 1 && 3 > 2 && true) {
    console.log('Passou');
} else {
    console.log('Não passou');
}

// Operador OR / ||
var idade = 15;
var nome = 'Filipe';

if(nome == 'Filipe' || idade > 15) {
    console.log('Pode entrar na aula de esgrima!');
} else {
    console.log('Não pode entrar!');
}

if(nome == 'Filipe' && 15 > 20 || 10 == 10) {
    console.log('Testando');
} else {
    console.log('Não entrou');
}

// Operador NOT / !
if(!false) {
    console.log('Passou');
}

var nome = 'Matheus';

if(!nome == 'Matheus') {
    console.log('OK!')
}