// Faça um programa para calcular o valor gasto de combustível em uma viagem.

// Você terá 3 variáveis. Sendo elas:
//  - Preço do combustível;
//  - Gasto médio de combustível por km;
//  - Distância em km da viagem.

//  Imprima no console o valor que será gasto para realizar a viagem.

const precoCombEtanol = 5.1;
const precoCombGasolina = 5.4;
const kmPorL = 14.5;
const viagemKm = 600;
const tipoComb = "Gasolina";

if(tipoComb==="Etanol"){
var litros = viagemKm / kmPorL;
var gasto = litros * precoCombEtanol;

console.log(
  `Neste caso, serão ${litros.toFixed(2)} litros consumidos de ${tipoComb} e nosso gasto em reais será R$ ${gasto.toFixed(2)}`
);
  } else if (tipoComb==="Gasolina") {
    var litros = viagemKm / kmPorL;
    var gasto = litros * precoCombGasolina;
    console.log(`Neste caso, serão ${litros.toFixed(2)} litros consumidos de Gasolina e nosso gasto em reais será R$ ${gasto.toFixed(2)}`)

  }
//Fim do desafio
