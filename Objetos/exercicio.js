// Crie uma classe para representar carros. Carros possuem  uma marca, uma cor e um 
// gasto médio de combustível por km rodado. Crie um método que dado a qtd de km e 
// o preço de combustível nos dê o valor gasto em reais para realizar este percurso

class Carros {
    marca;
    cor;
    gastomedio;

    constructor(marca, cor, gastomedio) {
        this.marca = marca;
        this.cor = cor;
        this.gastomedio = gastomedio;

    }
    calcularGasto(distancia, precoComb) {
        return distancia * this.gastomedio * precoComb;
    }
}


const fusca = new Carros('volks', 'vermelho', 1 / 15);

console.log(fusca.calcularGasto(73, 5.4).toFixed(2) + ' reais com um fusca');

const uno = new Carros('fiat', 'branco', 1 / 10);
console.log(uno.calcularGasto(73, 5.4).toFixed(2) + ' reais com um uno');


//Crie uma classe para representar pessoas, as pessoas tem nome, peso e altura
//As pessoas devem ter capacidade de dizer o valor do seu IMC.
//Instancie uma pessoa chamada José que tenha 70kg e 1.75m e peça ao José para dizer seu IMC.

class Pessoas {
    nome;
    peso;
    altura;

    constructor(nome,peso,altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calcularimc() {
        return this.peso / (this.altura * this.altura);
    }
}

const jose = new Pessoas('José', 70, 1.75)

console.log(jose);
console.log(jose.calcularimc().toFixed(2));