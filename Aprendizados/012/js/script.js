/*
for (let i = 0; i < 10001; i++) {
    document.getElementById("teste").innerHTML += i + "- ";
}
*/

/*
var anoAtual = new Date().getFullYear();

for(let i = anoAtual; i >= 1970; i--) {
    document.getElementById("ano").innerHTML += "<option value = '" + i + "'>" + i + "</option>";
}
*/

const carros = ["Gol", "Fusca", "Brasília", "Del Rey", "Chevette"];
var tamanho = carros.length;

for(let i = 0; i < tamanho; i++){
    document.getElementById("teste").innerHTML += carros[i] + " - ";
}