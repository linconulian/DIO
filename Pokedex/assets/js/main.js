
const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
let jsonBody=0
fetch(url) 
    .then((response) => response.json()) // Com arrow function transformando response em uma promise de body convertida em json
    .then((jsonBody) => console.log(jsonBody)) //recebendo o body convertido em json e printando ele
    .catch((error) => console.log(error))
    //O que vai pro segundo then é o retorno do primeiro, sempre
    //fetch traz uma promise: resultado após processamento assíncrono no servidor
    //quando não define, é GET
    //then traz uma função com uma resposta e um status code, ou seja, QUANDO der certo, chame a função
    //catch executa no caso de erro
console.log(jsonBody.results)

