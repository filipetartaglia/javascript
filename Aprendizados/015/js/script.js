//COMANDO BASE PARA PEGAR A DATA
let data = new Date();
console.log(data);

//PEGA O ANO ATUAL COM 4 DIGITOS
let ano = data.getFullYear();
console.log(ano);

//PEGA O MÊS ATUAL - DE 0 ATÉ 11 SENDO 0 JANEIRO E 11 DEZEMBRO
let mes = data.getMonth();
console.log(mes);

//MOSTRA O MÊS NO FORMATO ESCRITO
const mesesDoAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
let mesEscrito = mesesDoAno[data.getMonth()];
console.log(mesEscrito);

//PEGA DIA DO MÊS - 1 ATÉ 31
let diaMes = data.getDate();
console.log(diaMes);

//PEGA O DIA DA SEMANA - 0 ATÉ 6
let diaSemana = data.getDay();
console.log(diaSemana);

// DIA DA SEMANA NO FORMATO ESCRITO
const diasDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
let diasDaSemanaEscrito = diasDaSemana[data.getDay()];
console.log(diasDaSemanaEscrito); 

// PEGA A HORA
let hora = data.getHours();
console.log(hora);

//PEGA OS MINUTOS
let minutos = data.getMinutes();
console.log(minutos);

//PEGA SEGUNDOS
let segundos = data.getSeconds();
console.log(segundos);

//PEGA DATA NO PADRÃO BRASILEIRO
let dataBR = data.toLocaleString('pt-br');
console.log(dataBR);