var x = 0;

while (x < 5) {
    console.log('Testando repetição ' + x);

    //incremetador
    x++;
}

var arr = ['teste', 'testando', 'a', 'b'];
var y = 0;

while(y <= 3) {
    console.log((arr[y]));
    y++;
}

var palavra = 'Matheus';
var i = 0;

while(i < 6) {
    console.log(palavra[i]);

    i++;
}

// Operadores de atribuição

var x = 1;
var y = 2;

console.log(x = x + y);
console.log(x += y);

console.log(x -= y);

console.log(x *= y);

console.log(x /= y);

console.log(x++);
console.log(x--);

while(x <= 100) {
    console.log(x);
    
    x *= 2;
}

console.log(x);

var j = 5;

while(x > 0) {
    console.log(x);

    x-= j;
}