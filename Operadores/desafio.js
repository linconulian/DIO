// Faça um programa para calcular o valor gasto de combustível em uma viagem.

// Você terá 3 variáveis. Sendo elas:
//  - Preço do combustível;
//  - Gasto médio de combustível por km;
//  - Distância em km da viagem.

//  Imprima no console o valor que será gasto para realizar a viagem.


const precoComb = 5.79;
const kmPorL = 10;
const viagemKm = 100;
console.log(`O preço do combustível será considerado a ${precoComb}, nosso carro fará ${kmPorL}km por litro e nossa viagem terá ${viagemKm} kilometros. `);

var litros = viagemKm / kmPorL;
var gasto = litros*precoComb;

console.log(`Neste caso, serão ${litros.toFixed(2)} litros consumidos e nosso gasto em reais será R$ ${gasto.toFixed(2)}`);

//Fim do desafio