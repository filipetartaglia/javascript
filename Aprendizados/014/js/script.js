class Carro{
    constructor(valor1, valor2, valor3){
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
    buzina(){
        return this.modelo + " Buzinou: Biiiiii";
    }
}

const uno = new Carro("Fiat", "Uno", 2001);
console.log(uno, uno.buzina());

const gol = new Carro("Volkswagem", "Gol", 2013);
console.log(gol.buzina(), gol);