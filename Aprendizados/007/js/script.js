/* Objetos são basicamente variáveis com muitos valores dentro
Ex: const carro = {marca:"ford", modelo:"Ka", ano:2015};
*/

const carro = {
    marca:"ford", 
    modelo:"Ka", 
    ano:2015, 
    placa:"FLA-1986",
    buzina: function() {alert('Biiiiii')},
    completo: function(){
        return "A marca é " + this.marca + " e o modelo é " + this.modelo; 
    }
};

console.log(carro.completo());