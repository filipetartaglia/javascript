// length

var nome = 'Filipe';

console.log(nome.length);

var obj = 'bola';

console.log(obj.length);

// indexOf

console.log(nome[2]);

var frase = 'O rato roeu a roupa do rei de roma';

console.log(frase.indexOf('roeu'));

// slice

var roeu = frase.slice(7, 11);

console.log(roeu);

// replace

var novaFrase = frase.replace('roeu', 'teste');

console.log(novaFrase)

// toLowerCase e toUpperCase

var frase2= "Esta é a frase que vamos manipular"

var fraseCaixaAlta = frase2.ToUpperCase();

console.log(fraseCaixaAlta);

console.log(fraseCaixaAlta.toLowerCase());

// trim 

var nome = '      Filipe        ';

var nomeTrim = nome.trim();

console.log(nome);
console.log(nomeTrim);

// split

console.log(frase.split(''));

var tags = 'PHP, JavaScript, HTML, CSS';

console.log(tags.split(', '))

// lastIndexOf

var fraseDois = 'Eu quero a última palavra teste desta frase de teste'

console.log(fraseDois.indexOf('teste'));

console.log(fraseDois.lastIndexOf('teste'));