// Estrutura padrão de classe e objeto

class objeto {
    nome;
    idade;

    constructor(nome, idade) { //instancia automaticamente objetos não definidos
        this.nome = nome; // this informa que a classe/obj a ser alterado(a) é esta em que está sendo executada
        this.idade = idade;
    }
}

const objeto1 = {
    nome: 'João Silva',
    idade: 25
}

console.log(objeto1.nome);
console.log(objeto1.idade);
console.log(objeto1); //imprime  todos os parametros do obj

objeto1.altura = 169; //adicionando parametros

console.log(objeto1);
console.log(objeto1['nome']); //chamar o parametro de forma dinamica: chaves

const joao = new objeto() //adicionando uma instancia a uma classe
joao.nome = 'Joao Santos'
joao.idade = 25

console.log(joao);
const ricardo = new objeto('Ricardo', 30); //chamando direto para o constructor definir
console.log(ricardo);

function compararObjetos(obj1, obj2) {
    if (obj1.idade > obj2.idade) {
        console.log(`${obj1.nome} é mais velho do que ${obj2.nome}`)
    } else if (obj2.idade > obj1.idade) {
        console.log(`${obj2.nome} é mais velho do que ${obj1.nome}`)
    } else {
        console.log(`${obj1.nome} e ${obj2.nome} tem a mesma idade`)
    }
}

console.log(compararObjetos(joao, ricardo));
