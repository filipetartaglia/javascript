/* 
setTimeout(function, tempo em milisegundos)
-> Executa uma função, depois de esperar um número especificado de milisegundos.

setInterval(function, milisegundos)
-> É o mesmo que setTimeout(), mas repete a execução da função continuamente.
*/

function ativarContagem() {
    /*
    document.getElementById("tempo").innerHTML = "Começou a contagem!";

    //ATIVA A FUNÇÃO APENAS 1 VEZ QUANDO DER O TEMPO ESPECIFICADO
    tempo = setTimeout(function(){
        document.getElementById("tempo").innerHTML = "Executou o setTimeout";
     }, 5000);
     */

     setInterval(function() {
        var cronometro = document.getElementById("tempo").innerHTML;
        var soma = parseInt(cronometro) + 1;
        document.getElementById("tempo").innerHTML = soma;
     }, 1000)
}

function pararContagem() {
    clearInterval(tempo);

    /*
    clearTimeout(tempo);
    document.getElementById("tempo").innerHTML = "Parou a contagem!"
    */
}