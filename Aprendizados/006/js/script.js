// FUNÇÃO DE SOMA
function soma(valor1, valor2) {
    return valor1 + valor2;
}

document.getElementById('texto').innerHTML = soma(10, 20);

var total = soma(10,5);
alert(total);

// FUNÇÃO DE COTAÇÃO DO DOLAR
function realParaDolar(real, cotacaoDolar) {
    return real * cotacaoDolar;
}

var valorReal = 139.56;
var cotacao = 5.08;

var total2 = realParaDolar(valorReal, cotacao);
alert("O valor em real é R$ " + valorReal + " o valor em dolar é U$ "+ total2);

// FUNÇÃO OLÁ
function alertaHello(){
    alert('Olá pessoal!');
}

alertaHello();

// FUNÇÃO CELSIUS
function paraCelsius(valorFahrenheit) {
    return(5/9) * (valorFahrenheit - 32);
}

var x = paraCelsius(77);
alert('A temperatura é de ' + x + ' graus celsius');