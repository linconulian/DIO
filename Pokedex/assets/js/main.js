
const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function convertPokemonToLi(pokemon){
    return `
            <li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        <li class="type">Grass</li>
                         <li class="type">Poison</li>
                    </ol>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                    alt="${pokemon.name}">
                </div>
            </li>
            `
}
const pokemonList = document.getElementById('pokemonList')


fetch(url) 
    .then((response) => response.json()) // Com arrow function transformando response em uma promise de body convertida em json
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => { //recebendo o body convertido em json e printando ele
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            pokemonList.innerHTML += convertPokemonToLi(pokemon)
           
        }
    })
    .catch((error) => console.log(error))
    //O que vai pro segundo then é o retorno do primeiro, sempre
    //fetch traz uma promise: resultado após processamento assíncrono no servidor
    //quando não define, é GET
    //then traz uma função com uma resposta e um status code, ou seja, QUANDO der certo, chame a função
    //catch executa no caso de erro


