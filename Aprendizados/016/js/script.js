/*
const carro = {
    marca: "Fiat",
    modelo: "Uno",
    motor: ["1.6", "1.4", "1.0"]
}

//CONVERTEU PARA TEXTO
let texto = JSON.stringify(carro);

//COLOCOU O TEXTO NO HTML
document.getElementById('area').innerHTML = texto;

//CONVERTEU TEXTO EM OBJETO
let obj = JSON.parse(texto);

//PEGOU UM VALOR DESTE OBJETO
console.log(obj.motor[2]);
*/

function buscarCEP() {
    let campoTexto = document.getElementById('cep').value;
    
    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/' + campoTexto + '/json/');
    ajax.send();

    ajax.onload = function() { 

        //TRANSFORMOU O TEXTO EM OBJETO
        let obj = JSON.parse(this.responseText);

        //PEGOU OS VALORES QUE EU QUERIA
        let logradouro = obj.logradouro;
        let cidade = obj.localidade;
        let estado = obj.uf;

        document.getElementById('texto').innerHTML = "logradouro: " + logradouro + "<br> Cidade: " + cidade + "<br> Estado: " + estado;
    }
}


